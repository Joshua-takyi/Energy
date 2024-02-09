/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",
	content: ["./src/*html"],
	theme: {
		extend: {
			fontFamily: {
				roboto: ["Roboto", "sans - serif"],
			},
			colors: {
				skin: {
					head: "var(--color-text-head)",
					text: "var(--color-text-para)",
					background: "var( --color-background)",
					icons: "var(--color-text-icons)",
					bordercol: "var(--color-border)",
					extext: "var(--color-text-ex)",
				},
			},
			backgroundColor: {
				head: {
					fade: "var(--color-background)",
					buttonbg: "var( --color-text-head)",
					hoverbg: "var(--color-hover-bg)",
				},
			},
		},
	},
	plugins: [],
};
