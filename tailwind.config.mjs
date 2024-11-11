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

						div: 'rgba(240,240,255,0.25)',
						pre: 'rgba(15,15,0,0.25)',
						border: 'rgba(1,1,1,0.5)',

						text: 'black',

						a: "#0d5c8d",
						ahover: "#0b78bc",
					},
				},


			},

			boxShadow: {
				'd': ['0 0 8px rgba(0,0,0,0.5)', '0 0 4px rgba(0,0,0,0.75)', '0 0 2px rgba(0,0,0,1)', 'inset 0 16px 32px -6px rgba(0,0,0,0.65)', 'inset 0 4px 16px -1px rgba(0,0,0,0.5)', 'inset 0 2px 4px -1px rgba(0,0,0,0.5)', 'inset 0 -2px 4px -1px rgba(0,0,0,0.5)', 'inset 0 -4px 8px -1px rgba(0,0,0,0.75)', 'inset 0 0px 2px rgba(0,0,0,0.5)', 'inset 0 0 16px rgba(255,255,255,1)', 'inset 0 0 8px rgba(255,255,255,1)', 'inset 0 0 2px rgba(255,255,255,1)', 'inset 0 1px 2px -1px rgba(255,255,255,1)'],
			},

			backgroundImage: {
				'order': 'url("../images/backgrounds/7.png")',
			},

			dropShadow: {
				'bigtitle': ['0px 0px 16px rgba(0,0,0,0.025)', '0px 0px 2px rgba(0,0,0,0.25)',  '1px 0px rgba(0,0,0,1)', '-1px 0px rgba(0,0,0,1)', '0px 1px rgba(0,0,0,1)', '0px -1px rgba(0,0,0,1)'],
				't': ['0 0 8px rgb(255,255,255)', '0 0 2px rgba(255,255,255,0.5)']
			}
		},
	},
	plugins: [],
}
