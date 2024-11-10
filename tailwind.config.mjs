/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],

	theme: {
		fontFamily: {
			'sans': ['MS PGothic', 'Open Sans', 'system-ui', 'sans-serif'],
			'mono': ['MS Gothic', 'Open Sans', 'system-ui'],
		},

		extend: {
			colors: {
				default: {
					light: {
						bg1: 'white',
						bg2: '#ededed',

						div: 'rgba(245,245,255,0.025)',
						pre: 'rgba(10,10,0,0.25)',
						border: 'rgba(1,1,1,0.5)',

						text: 'black',

						a: "#0d5c8d",
						ahover: "#0b78bc",
					},
				},


			},

			boxShadow: {
				'd': ['0 0 8px rgba(0,0,0,0.5)', '0 0 4px rgba(0,0,0,1)', '0 0 2px rgba(0,0,0,1)', 'inset 0 0 16px rgba(255,255,255,0.75)', 'inset 0 0 8px rgba(255,255,255,0.75)'],
			},

			backgroundImage: {
				'order': 'url("../images/backgrounds/7.png")',
			},

			dropShadow: {
				'bigtitle': ['0px 0px 8px rgba(0,0,0,0.125)', '1px 0px rgba(0,0,0,1)', '-1px 0px rgba(0,0,0,1)', '0px 1px rgba(0,0,0,1)', '0px -1px rgba(0,0,0,1)'],
				't': ['0 0 8px rgb(255,255,255)', '0 0 2px rgba(255,255,255,0.5)']
			}
		},
	},
	plugins: [],
}
