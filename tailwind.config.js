/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
		"./node_modules/flowbite-react/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			zIndex: {
				1: 1,
				2: 2,
				3: 3,
			},
			width: {
				"calc-90vw": "calc(100vw - 71vw)",
			},
		},
	},
	plugins: [require("flowbite/plugin")],
};
