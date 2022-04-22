module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            backgroundImage: {
                "wallpaper":"url('https://res.cloudinary.com/wall-empire/image/upload/v1650584073/images/wallpaper_bg_mjfti1.png')",
                "blinds":"url('https://res.cloudinary.com/wall-empire/image/upload/v1650584072/images/blidns-bg_kqqu6p.png')",
                "curtains": "url('https://res.cloudinary.com/wall-empire/image/upload/v1650584078/images/curtain_menu_bg_nu982l.png')",
                "cushions": "url('https://res.cloudinary.com/wall-empire/image/upload/v1650584078/images/cushions_bg_b4rqvc.png')",
                "canvas": "url('https://res.cloudinary.com/wall-empire/image/upload/v1650584072/images/canvas-frames-bg_eq2m0n.png')"
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
