import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    colors: {

      white: "#ffffff",

      blue: {
        100: "#dbeafe",
        200: "#bfdbfe",
        300: "#93c5fd",
        400: "#60a5fa",
        500: "#3b82f6",
        600: "#2563eb",
        DEFAULT: "#1d4ed8",
        800: "#1e40af",
      },

      gray: {
        200: "#e5e7eb",
        DEFAULT: "#d1d5db",
        400: "#9ca3af",
        500: "#6b7280",
        600: "#4b5563",
        700: "#374151",
        800: "#1f2937",
        900: "#111827",
      },

      alert: {
        danger: "#FF4E4E",
        success: "#00DD16",
        warning: "#FEB72F",
      },

    },

    fontSize: {

      '8xl': ['120px', {

        lineHeight: '120px',
        letterSpacing: '-6px',
        fontWeight: '500',

      }],

      '7xl': ['72px', {

        lineHeight: '80px',
        letterSpacing: '-4.5px',
        fontWeight: '600',

      }],

      '6xl': ['55px', {

        lineHeight: '60px',
        letterSpacing: '-2.5px',
        fontWeight: '500',

      }],

      '5xl': ['48px', {

        lineHeight: '54px',
        letterSpacing: '-1.600000023841858px',
        fontWeight: '500',

      }],

      '4xl': ['36px', {

        lineHeight: '44px',
        letterSpacing: '-1.2000000476837159px',
        fontWeight: '500',

      }],

      '3xl': ['28px', {

        lineHeight: '34px',
        letterSpacing: '-0.800000011920929px',
        fontWeight: '500',

      }],

      '2xl': ['24px', {

        lineHeight: '30px',
        letterSpacing: '-1px',
        fontWeight: '400',

      }],

      xl: ['24px', {

        lineHeight: '30px',
        letterSpacing: '-1px',
        fontWeight: '400',

      }],

      lg: ['21px', {

        lineHeight: '30px',
        letterSpacing: '-0.800000011920929px',
        fontWeight: '400',

      }],

      base: ['17px', {

        lineHeight: '25px',
        letterSpacing: '-0.699999988079071px',
        fontWeight: '400',

      }],

      sm: ['15px', {

        lineHeight: '23px',
        letterSpacing: '-0.6000000238418579px',
        fontWeight: '400',

      }],

      caption1: ['20px', {

        lineHeight: '24px',
        letterSpacing: '-0.6000000238418579px',
        fontWeight: '400',

      }],

      caption2: ['18px', {

        lineHeight: '20px',
        letterSpacing: '-0.30000001192092896px',
        fontWeight: '400',

      }],

      caption3: ['16px', {

        lineHeight: '18px',
        letterSpacing: '-0.5px',
        fontWeight: '400',

      }],

      caption4: ['13px', {

        lineHeight: '15px',
        letterSpacing: '-0.2000000029802322px',
        fontWeight: '400',

      }],
    },

    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
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
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
