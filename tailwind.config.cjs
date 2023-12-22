/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			keyframes: {
				fade: {
					'0%': {
						opacity: 0
					},
					'50%': {
						opacity: 0.5
					},
					'100%': {
						opacity: 1
					}
				}
			}
		}
	},

	plugins: []
};

module.exports = config;
