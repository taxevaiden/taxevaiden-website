/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],

	theme: {
		fontFamily: {
			'sans': ['Segoe UI', 'Open Sans', 'sans-serif'],
			'mono': ['Consolas', 'Roboto Mono', 'mono'],
		},

		extend: {
			colors: {
				default: {
					light: {
						bg1: 'white',
						bg2: '#ededed',

						div: 'rgba(165,192,211,0.5)',
						pre: 'rgba(15,15,0,0.25)',
						border: 'rgba(1,1,1,0.5)',

						text: 'black',

						a: "#0d5c8d",
						ahover: "#0b78bc",
					},
				},


			},

			boxShadow: {
				'd': [
					//Dropdown shadow
					'0 0 16px rgba(0,0,15,0.5)', 
					'0 0 8px rgba(0,0,15,0.5)', 
					'0 0 4px rgba(0,0,15,0.75)', 
					'0 0 2px rgba(0,0,15,1)', 

					//Shadow
					'inset 0 16px 32px -6px rgba(0,0,15,0.025)', 
					'inset 0 4px 16px -1px rgba(0,0,15,0.125)', 
					'inset 0 2px 4px -1px rgba(0,0,15,0.125)', 
					'inset 0 -2px 4px -1px rgba(0,0,15,0.025)', 
					'inset 0 -4px 8px -1px rgba(0,0,15,0.025)', 
					'inset 0 0px 2px rgba(0,0,15,0.125)', 

					//i forgor
					'inset 0 0 16px rgba(240,240,255,0.125)', 
					'inset 0 0 8px rgba(240,240,255,0.125)', 
					'inset 0 0 2px rgba(240,240,255,0.125)', 
					'inset 0 1px 2px -1px rgba(240,240,255,0.125)'
				],
			},

			backgroundImage: {
				'order': 'url("../images/backgrounds/7.png")',
				'peak': 'url("../images/backgrounds/8.jpg")',
			},

			dropShadow: {
				'bigtitle': ['0px 0px 2px rgba(0,0,0,0.25)',  '1px 0px rgba(0,0,0,1)', '-1px 0px rgba(0,0,0,1)', '0px 1px rgba(0,0,0,1)', '0px -1px rgba(0,0,0,1)'],
				't': ['0 0 8px rgb(255,255,255)', '0 0 2px rgba(255,255,255,0.25)']
			}
		},
	},
	plugins: [],
}
