/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],

    theme: {
        fontFamily: {
            sans: ["MS Gothic", "Open Sans", "sans-serif"],
            mono: ["MS Gothic", "Open Sans", "sans-serif"],
        },

        extend: {
            colors: {
                default: {
                    bg1: "var(--bg1)",
                    bg2: "var(--bg2)",
                    banner1: "var(--banner1)",
                    banner2: "var(--banner2)",
                    div: "var(--div)",
                    pre: "var(--pre)",
                    border: "var(--border)",
                    text: "var(--text)",
                    text2: "var(--text2)",
                    a: "var(--a)",
                    ahover: "var(--ahover)",
                },
            },

            boxShadow: {
                d: [
                    "inset 2px 2px rgba(0,0,0,0.75)",
                    "inset -2px -2px rgba(0,0,0,0.5)",
                ],
            },

            backgroundImage: {
                order: 'url("../images/backgrounds/7.png")',
                peak: 'url("../images/backgrounds/8.jpg")',
                repeatingrepating: 'url("../images/backgrounds/6.gif")',
                border: "url(../images/dither-patterns/border.png)",

                "dither-0": "url(../images/dither-patterns/0.png)",
                "dither-1": "url(../images/dither-patterns/1.png)",
                "dither-2": "url(../images/dither-patterns/2.png)",
                "dither-3": "url(../images/dither-patterns/3.png)",
                "dither-4": "url(../images/dither-patterns/4.png)",
                "dither-5": "url(../images/dither-patterns/5.png)",
                "dither-6": "url(../images/dither-patterns/6.png)",
                "dither-7": "url(../images/dither-patterns/7.png)",
                "dither-8": "url(../images/dither-patterns/8.png)",
                "dither-9": "url(../images/dither-patterns/9.png)",
                "dither-10": "url(../images/dither-patterns/10.png)",
                "dither-11": "url(../images/dither-patterns/11.png)",
                "dither-12": "url(../images/dither-patterns/12.png)",
                "dither-13": "url(../images/dither-patterns/13.png)",
                "dither-14": "url(../images/dither-patterns/14.png)",
                "dither-15": "url(../images/dither-patterns/15.png)",
                "dither-16": "url(../images/dither-patterns/16.png)",
			},

            dropShadow: {
                bigtitle: [
                    "0px 0px 2px rgba(0,0,0,0.25)",
                    "1px 0px rgba(0,0,0,1)",
                    "-1px 0px rgba(0,0,0,1)",
                    "0px 1px rgba(0,0,0,1)",
                    "0px -1px rgba(0,0,0,1)",
                ],
                t: [
                    "0 0 8px rgba(255,255,255,0.05)",
                    "0 0 2px rgba(255,255,255,0.05)",
                ],
            },
        },
    },
    plugins: [],
};
