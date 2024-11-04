/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],

	theme: {
		fontFamily: {
			'sans': ['MS PGothic', 'system-ui', 'sans-serif'],
			'mono': ['MS PGothic', 'system-ui'],
		},

		extend: {
			colors: {
				default: {
					light: {
						bg1: '#1c1c1c',
						bg2: '#2c2c2e',

						div: 'white',
						div2: '#111112',
						border: 'black',

						text: 'black',

						a: "#0d5c8d",
						ahover: "#0b78bc",
					},

					dark: {
						bg1: '#1c1c1c',
						bg2: '#2c2c2e',

						div: '#19191a',
						div2: '#111112',
						border: 'white',

						text: 'white',
						
						a: "#8ab7d4",
						ahover: "#93cbed",
					}
				},


			},

			boxShadow: {
				'd': '0 10px rgba(0,0,0,0.5)',
			}
		},
	},
	plugins: [],
}
