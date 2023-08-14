/** @type {import('tailwindcss').Config} **/

module.exports = {
	
	content: [
		"./src/**/*.{html,js}",
		"./node_modules/tw-elements/dist/js/**/*.js"
	  ],
	darkMode: 'class',
	theme: {
		extend: {
			
			fontFamily: {
				body: ['Parisienne'],
			},
		},
	},
	plugins: [require('@tailwindcss/forms'), require('tailwind-scrollbar'), require("tw-elements/dist/plugin") ({ nocompatible: true })],

	
};
