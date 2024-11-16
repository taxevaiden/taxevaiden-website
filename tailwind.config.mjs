/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],

	theme: {
		fontFamily: {
			'sans': ['MS Gothic', 'Open Sans', 'sans-serif'],
			'mono': ['Consolas', 'Roboto Mono', 'mono'],
		},

		extend: {
			colors: {
				default: {
					bg1: 'white',
					bg2: '#ededed',

					div: 'rgba(255,255,255,1)',
					pre: 'rgba(15,15,0,0.25)',
					border: 'rgba(0,0,0,1)',

					text: 'black',
					text2: 'gray',

					a: "#0d5c8d",
					ahover: "#0b78bc",
				},
			},

			boxShadow: {
				'd': ['inset 2px 2px rgba(0,0,0,0.75)', 'inset -2px -2px rgba(0,0,0,0.5)'],
				
			},

			backgroundImage: {
				'order': 'url("../images/backgrounds/7.png")',
				'peak': 'url("../images/backgrounds/8.jpg")',
				'repeatingrepating': 'url("../images/backgrounds/6.gif")',
				'bit': 'url("../images/backgrounds/9.png")',
				'bit2': 'url("../images/backgrounds/10.png")'
			},

			dropShadow: {
				'bigtitle': ['0px 0px 2px rgba(0,0,0,0.25)',  '1px 0px rgba(0,0,0,1)', '-1px 0px rgba(0,0,0,1)', '0px 1px rgba(0,0,0,1)', '0px -1px rgba(0,0,0,1)'],
				't': ['0 0 8px rgb(255,255,255)', '0 0 2px rgba(255,255,255,0.25)']
			}
		},
	},
	plugins: [],
}
