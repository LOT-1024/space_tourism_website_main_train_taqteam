/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                blackCustom: '#0B0D17',
            },
            animation: {
                'spin-slow': 'spin 120s linear infinite',
            },
            spacing: {
                dependWidth: 'calc(100% - 96px)',
                dependWidthTechnology: 'calc(100% - 166.5px)',
            },
        },
    },
    plugins: [],
}
