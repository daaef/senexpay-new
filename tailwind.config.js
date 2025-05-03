import animate from "tailwindcss-animate";
import { setupInspiraUI } from "@inspira-ui/plugins";

export default {
	darkMode: ["class"],
	safelist: ["dark"],
	prefix: "",
	content: [
		'components/**/*.{vue,js,ts}',
		'layouts/**/*.vue',
		'pages/**/*.vue',
		'composables/**/*.{js,ts}',
		'plugins/**/*.{js,ts}',
		'App.{js,ts,vue}',
		'app.{js,ts,vue}',
		'Error.{js,ts,vue}',
		'error.{js,ts,vue}',
		'content/**/*.md'
	],
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: "1rem",
				sm: "2rem",
				lg: "4rem",
				xl: "5rem",
				"2xl": "6rem",
			},
		},
		extend: {
			colors: {
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				'custom-purple': '#A26DFF',
				'custom-blue': '#4085F2',
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
			},
			borderRadius: {
				xl: "calc(var(--radius) + 4px)",
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			fontFamily: {
				sf: ['"SF Pro Rounded"', 'sans-serif'],
			},
			gradientColorStops: theme => ({
				...theme('colors'),
				'custom-purple': '#A26DFF',
				'custom-blue': '#4085F2',
			}),
		},
	},

	plugins: [animate, setupInspiraUI],
};
