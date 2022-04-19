module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            backgroundImage: {
                "wallpaper":"url('http://wall-empire.com/demo/wp-content/themes/vayne-child/assets/images/wallpaper_bg.png')",
                "blinds":"url('http://wall-empire.com/demo/wp-content/themes/vayne-child/assets/images/blidns-bg.png')",
                "curtains": "url('http://wall-empire.com/demo/wp-content/themes/vayne-child/assets/images/curtain_menu_bg.png')",
                "cushions": "url('http://wall-empire.com/demo/wp-content/themes/vayne-child/assets/images/cushions_bg.png')",
                "canvas": "url('http://wall-empire.com/demo/wp-content/themes/vayne-child/assets/images/canvas-frames-bg.png')"
            },
            translate: {
                '1/7': '14.2857143%',
                '2/7': '28.5714286%',
                '3/7': '42.8571429%',
                '4/7': '57.1428571%',
                '5/7': '71.4285714%',
                '6/7': '85.7142857%',
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
