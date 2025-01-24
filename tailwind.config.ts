/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
			primary: {
				"100": "#EEFDFF",
				DEFAULT: "#00D7FFff",
			},
			secondary: "#FBE843",
			black: { 
				"100": "#333333",
				"200": "#141413",
				"300": "#7D8087",
				DEFAULT: "#000000",
			},
			white: {
				"100": "#F7F7F7",
				DEFAULT: "#FFFFFF",
			},
			deepskyblue: {
				DEFAULT: '#00bfff',
				'100': '#00d4ff'
			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
		fontFamily: {
			"work-sans": ["var(--font-work-sans)"],
		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
		boxShadow: {
			100: "2px 2px 0px 0px rgb(0, 0, 0)",
			200: "2px 2px 0px 2px rgb(0, 0, 0)",
			300: "2px 2px 0px 2px rgb(0, 129, 153)",
		},
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
