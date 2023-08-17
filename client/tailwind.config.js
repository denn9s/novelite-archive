/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        colors: {
            'white': '#ffffff',
            'light-purple': '#a092e6',
            'lighter-purple': '#c8c3de',
            'light-purple-opaque': '#a092e622',
            'dark-gray': '#242424',
            'mid-gray': '#424242',
            'light-gray': '#848484',
        },
        extend: {},
    },
    plugins: [],
}

