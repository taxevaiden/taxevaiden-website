/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `wrangler dev src/index.ts` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `wrangler deploy src/index.ts --name my-worker` to deploy your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export interface Env {
  TAXEVAIDEN_COMMENTS_KV: KVNamespace;
}

interface Comment {
  name: string;
  content: string;
  date: string;
}

interface CommentsDatabase {
  comments: Comment[];
}

const commentNameLength = 50;
const commentContentLength = 500;

function withTimeout<T>(promise: Promise<T>, timeoutMs: number): Promise<T> {
  return Promise.race([
    promise,
    new Promise<never>((_, reject) =>
      setTimeout(
        () => reject(new Error("Cache retrieval timed out")),
        timeoutMs,
      ),
    ),
  ]);
}

export default {
  async fetch(
    request: Request,
    env: Env,
    ctx: ExecutionContext,
  ): Promise<Response> {
    const { method } = request;
    const url = new URL(request.url);

    if (method === "OPTIONS") {
      return new Response(null, {
        status: 204, // No Content
        headers: {
          "Access-Control-Allow-Origin": "*", // Allow any origin (or specify your domain)
          "Access-Control-Allow-Methods": "GET, POST, OPTIONS", // Allowed HTTP methods
          "Access-Control-Allow-Headers": "Content-Type", // Allowed headers
        },
      });
    }

    try {
      if (method === "POST") {
        const data = (await request.json()) as Comment; // Parse JSON data

        const { name, content, date } = data;

        if (!name || typeof name !== "string" || name.length > 50) {
          return new Response(
            JSON.stringify({
              error:
                "Invalid name. Name must exist and be less than 50 characters.",
            }),
            {
              status: 400,
              headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
                "Access-Control-Allow-Headers": "Content-Type",
              },
            },
          );
        }

        if (!content || typeof content !== "string" || content.length > 500) {
          return new Response(
            JSON.stringify({
              error:
                "Invalid content. Content must exist and be less than 500 characters.",
            }),
            {
              status: 400,
              headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
                "Access-Control-Allow-Headers": "Content-Type",
              },
            },
          );
        }

        if (!date || typeof date !== "string") {
          return new Response(
            JSON.stringify({
              error: "Invalid date. Date must exist.",
            }),
            {
              status: 400,
              headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
                "Access-Control-Allow-Headers": "Content-Type",
              },
            },
          );
        }

        //check if path JSON already exists
        const pathJSON = await withTimeout(
          env.TAXEVAIDEN_COMMENTS_KV.get(url.pathname),
          5000,
        );

        //if it doesn't exist or takes too long, we error :)
        if (!pathJSON) {
          const initialJSON = JSON.stringify({ comments: [] });

          // store the new JSON in the KV store
          await env.TAXEVAIDEN_COMMENTS_KV.put(url.pathname, initialJSON);

          return new Response(
            JSON.stringify({
              error: "Comment database not found. Created new one.",
            }),
            {
              status: 201,
              headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
                "Access-Control-Allow-Headers": "Content-Type",
              },
            },
          );
        }

        // parse the existing JSON
        let parsedJSON: CommentsDatabase;
        try {
          parsedJSON = JSON.parse(pathJSON);
        } catch {
          return new Response(
            JSON.stringify({
              error: "Invalid JSON format in the comment database.",
            }),
            {
              status: 500,
              headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
                "Access-Control-Allow-Headers": "Content-Type",
              },
            },
          );
        }

        // if the JSON exists but is in a "not found" state, error
        if (!parsedJSON || Object.keys(parsedJSON).length === 0) {
          return new Response(
            JSON.stringify({
              error: "Comment database is invalid or empty.",
            }),
            {
              status: 404,
              headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
                "Access-Control-Allow-Headers": "Content-Type",
              },
            },
          );
        }

        parsedJSON.comments.push(data);

        await env.TAXEVAIDEN_COMMENTS_KV.put(
          url.pathname,
          JSON.stringify(parsedJSON),
        );

        return new Response(
          JSON.stringify({
            message: "Data received",
            receivedData: data,
            pathName: url.pathname,
          }),
          {
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
              "Access-Control-Allow-Headers": "Content-Type",
            },
          },
        );
      }
    } catch (err) {
      return new Response(JSON.stringify({ error: "Invalid JSON data" }), {
        status: 400,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
        },
      });
    }

    try {
      if (method === "GET") {
        const pathJSON = await withTimeout(
          env.TAXEVAIDEN_COMMENTS_KV.get(url.pathname),
          5000,
        );

        if (!pathJSON) {
          return new Response(
            JSON.stringify({
              error: "Couldn't fetch database.. or it just look too long",
            }),
            {
              status: 404,
              headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
                "Access-Control-Allow-Headers": "Content-Type",
              },
            },
          );
        }

        return new Response(JSON.stringify(pathJSON), {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type",
          },
        });
      }
    } catch (err) {
      if (err instanceof Error) {
        return new Response(
          JSON.stringify({
            error: err.message,
          }),
          {
            status: 500,
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
              "Access-Control-Allow-Headers": "Content-Type",
            },
          },
        );
      } else {
        return new Response(
          JSON.stringify({
            error: "Unknown. idk what happened buddy",
          }),
          {
            status: 500,
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
              "Access-Control-Allow-Headers": "Content-Type",
            },
          },
        );
      }
    }

    return new Response(
      JSON.stringify({
        error: "Endpoint not found",
      }),
      { status: 404 },
    );
  },
};
