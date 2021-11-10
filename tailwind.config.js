module.exports = {
	mode: 'jit',
	purge: true,
	purge: [
		'./pages/**/*.{js,jsx,ts,tsx}',
		'./components/**/*.{js,jsx,ts,tsx}',
	],
	darkMode: 'media', // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				'orange': '#ef7c17',
				'darkblue': '#1c2532',
				'navgrey': '#212121'
			},
			boxShadow: {
				polaroid: 'rgba(0, 0, 0, 0.5) 0px 4px 6px',
			},
			borderWidth: {
				'3': '3px'
			}
		},
	},
	variants: {
		extend: {},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
