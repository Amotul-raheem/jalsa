/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily:{
                'coustard': ['Coustard', 'serif'],
                'space': ['Space Grotesk', 'sans-serif']
            },
            boxShadow:{
                'event': '-7px 7px 0px 0px #000',
            },
            backgroundImage:{
                "eventGrad":"linear-gradient(180deg, #D1D0FF 0%, rgba(220, 220, 255, 0.00) 100%)"
            },
            screens: {
                'xs': {'min': '240px', 'max': '639px'},

                'sm': {'min':'640px', 'max': '767px'},

                'md': {'min':'768px', 'max': '1023px'},

                'lg': {'min':'1024px', 'max': '1279px'},

                'xl': {'min': '1280px', 'max': '1535px'},

                '2xl': {'min': '1536px'},
            },


        },
    },
    plugins: [],
}

