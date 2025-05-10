/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: {
          900: '#0A0A0A',
          800: '#121212',
          700: '#1A1A1A',
          600: '#222222',
          500: '#2A2A2A',
          400: '#333333',
        },
        electric: {
          600: '#0063FF',
          500: '#0070FF',
          400: '#3B8AFF',
          300: '#75A8FF',
        },
        coral: {
          600: '#FF3A5E',
          500: '#FF4D6D',
          400: '#FF6B87',
          300: '#FF8FA3',
        },
        light: {
          900: '#FFFFFF',
          800: '#F2F2F2',
          700: '#E6E6E6',
          600: '#CCCCCC',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
        },
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
        },
      },
      typography: (theme) => ({
        invert: {
          css: {
            '--tw-prose-body': theme('colors.light[600]'),
            '--tw-prose-headings': theme('colors.light[900]'),
            '--tw-prose-lead': theme('colors.light[600]'),
            '--tw-prose-links': theme('colors.electric[500]'),
            '--tw-prose-bold': theme('colors.light[900]'),
            '--tw-prose-counters': theme('colors.light[600]'),
            '--tw-prose-bullets': theme('colors.light[600]'),
            '--tw-prose-hr': theme('colors.dark[600]'),
            '--tw-prose-quotes': theme('colors.light[900]'),
            '--tw-prose-quote-borders': theme('colors.electric[500]'),
            '--tw-prose-captions': theme('colors.light[600]'),
            '--tw-prose-code': theme('colors.light[900]'),
            '--tw-prose-pre-code': theme('colors.light[900]'),
            '--tw-prose-pre-bg': theme('colors.dark[700]'),
            '--tw-prose-th-borders': theme('colors.dark[600]'),
            '--tw-prose-td-borders': theme('colors.dark[600]'),
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};