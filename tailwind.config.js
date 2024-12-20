import {nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      keyframes: {
          "scrolling-banner": {
            from: {transform: "translateX(0)"},
            to: {transform: "translateX(calc(-50% - var(--gap)/2))"},
          },
          "scrolling-banner-vertical": {
            from: {transform: "translateY(0)"},
            to: {transform: "translateY(calc(-50% - var(--gap)/2))"},
          },
        },
        animation: {
          "scrolling-banner": "scrolling-banner var(--duration) linear infinite",
          "scrolling-banner-vertical": "scrolling-banner-vertical var(--duration) linear infinite",
        },
    },
  },
  darkMode: "class",
  plugins: [nextui({
    themes: {
        "golden": {
          extend: "dark",
          colors: {
            background: "hsl(20 14.3% 4.1%)",
            foreground: "hsl(0 0% 100%)",
            primary: "hsl(41 35% 45%)",
            primaryForeground: "hsl(60 9.1% 97.8%)",
            secondary: "hsl(38 44% 85%)",
            secondaryForeground: "hsl(24 9.8% 10%)",
            accent: "hsl(35 40% 65%)",
            accentForeground: "hsl(24 9.8% 10%)",
            card: "hsl(20 14.3% 4.1%)",
            cardForeground: "hsl(0 0% 100%)",
            border: "hsl(20 5.9% 90%)",
            input: "hsl(20 5.9% 90%)",
            destructive: "hsl(0 84.2% 60.2%)",
            destructiveForeground: "hsl(60 9.1% 97.8%)",
            ring: "hsl(41 35% 45%)",
            primary: {
              DEFAULT: "hsl(41 35% 45%)",
              foreground: "hsl(60 9.1% 97.8%)",
            },
            secondary: {
              DEFAULT: "hsl(38 44% 85%)",
              foreground: "hsl(24 9.8% 10%)",
            },
            destructive: {
              DEFAULT: "hsl(0 84.2% 60.2%)",
              foreground: "hsl(60 9.1% 97.8%)",
            },
            muted: {
              DEFAULT: "hsl(60 4.8% 95.9%)",
            },
          },
          extend: "light", 
          colors: {
            background: "hsl(0 0% 100%)",
            foreground: "hsl(20 14.3% 4.1%)",
            primary: "hsl(41 35% 45%)",
            primaryForeground: "hsl(60 9.1% 97.8%)",
            secondary: "hsl(38 44% 85%)",
            secondaryForeground: "hsl(24 9.8% 10%)",
            accent: "hsl(35 40% 65%)",
            accentForeground: "hsl(24 9.8% 10%)",
            card: "hsl(0 0% 100%)",
            cardForeground: "hsl(20 14.3% 4.1%)",
            border: "hsl(20 5.9% 90%)",
            input: "hsl(20 5.9% 90%)",
            destructive: "hsl(0 84.2% 60.2%)",
            destructiveForeground: "hsl(60 9.1% 97.8%)",
            ring: "hsl(41 35% 45%)",
            primary: {
              DEFAULT: "hsl(41 35% 45%)",
              foreground: "hsl(20 14.3% 4.1%)",
            },
            secondary: {
              DEFAULT: "#BEF264",
              foreground: "#000000",
            },
          },
          radii: {
            md: "0.75rem", // radius default
            lg: "calc(0.75rem + 4px)", // contoh radius besar
          },
          layout: {
            disabledOpacity: "0.3",
            radius: {
              small: "4px",
              medium: "6px",
              large: "8px",
            },
            borderWidth: {
              small: "1px",
              medium: "2px",
              large: "3px",
            },
          },
        },
        
    },
  })],
}
