import { Fragment, useState } from 'react'
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import { MenuIcon, SearchIcon, XIcon } from '@heroicons/react/outline'
import { Link } from "react-router-dom";
import { ChevronDownIcon } from '@heroicons/react/solid';
import Logo from '../resources/images/WE-full-logo.png'

const navigation = {
    categories: [
        {
            id: 'Wallpaper',
            name: 'Wallpaper',
            bgImage: 'bg-wallpaper',
            featured: [
                {
                    name: 'New Arrivals',
                    href: '/',
                    imageSrc: 'http://wall-empire.com/demo/wp-content/uploads/2020/12/5321-scaled.jpg',
                    imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
                },
                {
                    name: 'Basic Tees',
                    href: '/',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
                    imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
                },
            ],
            sections: [
                {
                    id: 'Explore Collection',
                    name: 'Explore Collection',
                    items: [
                        { name: 'Kool Kids', href: '/product-category/koolkids' },
                        { name: '3rd Orbit', href: '/product-category/3rdorbit' },
                        { name: 'Cities & Places', href: '/product-category/cities-places' },
                        { name: 'Nature', href: '/product-category/nature' },
                        { name: 'Maps', href: '/product-category/maps' },
                        { name: 'Zen Buddha', href: '/product-category/zenbuddha' },
                        { name: 'Wonder sports', href: '/product-category/wondersports' },
                        { name: 'Spiritual & Religion', href: '/product-category/spiritual-religion' },
                    ],
                },
                {
                    id: 'Explore Design',
                    name: 'Explore Design',
                    items: [
                        { name: 'Business', href: '/' },
                        { name: 'Royal Culture', href: '/' },
                        { name: 'Tropical', href: '/' },
                        { name: 'Textures', href: '/' },
                        { name: 'Geometry', href: '/' },
                        { name: 'Granite', href: '/' },
                        { name: 'Astronomy & Space', href: '/' },
                        { name: 'Art & Design', href: '/' },
                    ],
                }
            ],
        },
        {
            id: 'Blinds',
            name: 'Blinds',
            bgImage: 'bg-blinds',
            featured: [
                {
                    name: 'New Arrivals',
                    href: '/',
                    imageSrc: 'http://wall-empire.com/demo/wp-content/uploads/2020/12/5321-scaled.jpg',
                    imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
                },
                {
                    name: 'Basic Tees',
                    href: '/',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
                    imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
                },
            ],
            sections: [
                {
                    id: 'Zebra Blinds',
                    name: 'Zebra Blinds',
                    items: [
                        { name: 'Kool Kids', href: '/' },
                        { name: '3rd Orbit', href: '/' },
                        { name: 'Cities & Places', href: '/' },
                        { name: 'Nature', href: '/' },
                        { name: 'Maps', href: '/' },
                        { name: 'Zen Buddha', href: '/' },
                        { name: 'Wonder sports', href: '/' },
                        { name: 'Spiritual & Religion', href: '/' },
                    ],
                },
                {
                    id: 'Rollar Blinds',
                    name: 'Rollar Blinds',
                    items: [
                        { name: 'Business', href: '/' },
                        { name: 'Royal Culture', href: '/' },
                        { name: 'Tropical', href: '/' },
                        { name: 'Textures', href: '/' },
                        { name: 'Geometry', href: '/' },
                        { name: 'Granite', href: '/' },
                        { name: 'Astronomy & Space', href: '/' },
                        { name: 'Art & Design', href: '/' },
                    ],
                }
            ],
        },
        {
            id: 'Curtains',
            name: 'Curtains',
            bgImage: 'bg-curtains',
            featured: [
                {
                    name: 'New Arrivals',
                    href: '/',
                    imageSrc: 'http://wall-empire.com/demo/wp-content/uploads/2020/12/5321-scaled.jpg',
                    imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
                },
                {
                    name: 'Basic Tees',
                    href: '/',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
                    imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
                },
            ],
            sections: [
                {
                    id: 'EMBELLISH COLLECTIONS',
                    name: 'EMBELLISH COLLECTIONS',
                    items: [
                        { name: 'Top Selling', href: '/' },
                        { name: 'All', href: '/' },
                        { name: 'Custom Curtain', href: '/' }
                    ],
                },
                {
                    id: 'CUSTOMIZE CURTAINS',
                    name: 'CUSTOMIZE CURTAINS',
                    items: [
                        { name: 'Photographic', href: '/' },
                        { name: 'Paisley', href: '/' },
                        { name: 'Leaves', href: '/' },
                        { name: 'Small Motifs', href: '/' },
                        { name: 'All', href: '/' },
                    ],
                }
            ],
        },
        {
            id: 'Cushions',
            name: 'Cushions',
            bgImage: 'bg-cushions',
            featured: [
                {
                    name: 'New Arrivals',
                    href: '/',
                    imageSrc: 'http://wall-empire.com/demo/wp-content/uploads/2020/12/5321-scaled.jpg',
                    imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
                },
                {
                    name: 'Basic Tees',
                    href: '/',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
                    imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
                },
            ],
            sections: [
                {
                    id: 'EXPLORE BY COLLECTIONS',
                    name: 'EXPLORE BY COLLECTIONS',
                    items: [
                        { name: 'New', href: '/' },
                        { name: 'Top Selling', href: '/' },
                        { name: 'All', href: '/' }
                    ],
                }
            ],
        },
        {
            id: 'Canvas Frames',
            name: 'Canvas Frames',
            bgImage: 'bg-canvas',
            featured: [
                {
                    name: 'New Arrivals',
                    href: '/',
                    imageSrc: 'http://wall-empire.com/demo/wp-content/uploads/2020/12/5321-scaled.jpg',
                    imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
                },
                {
                    name: 'Basic Tees',
                    href: '/',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
                    imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
                },
            ],
            sections: [
                {
                    id: 'EXPLORE BY COLLECTIONS',
                    name: 'EXPLORE BY COLLECTIONS',
                    items: [
                        { name: 'New', href: '/' },
                        { name: 'Top Selling', href: '/' },
                        { name: 'All', href: '/' }
                    ],
                }
            ],
        },
    ],
    pages: [
        { name: 'Company', href: '/' },
        { name: 'Stores', href: '/' },
    ],
}

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function Header() {
    const [open, setOpen] = useState(false)

    return (
        <div className="bg-white w-full shadow-sm z-50">
            {/* Mobile menu */}
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="fixed inset-0 flex z-50 lg:hidden" onClose={setOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="transition-opacity ease-linear duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-linear duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <Transition.Child
                        as={Fragment}
                        enter="transition ease-in-out duration-300 transform"
                        enterFrom="-translate-x-full"
                        enterTo="translate-x-0"
                        leave="transition ease-in-out duration-300 transform"
                        leaveFrom="translate-x-0"
                        leaveTo="-translate-x-full"
                    >
                        <div className="relative max-w-2xl w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto">
                            <div className="px-4 pt-5 pb-2 flex">
                                <button
                                    type="button"
                                    className="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400"
                                    onClick={() => setOpen(false)}
                                >
                                    <span className="sr-only">Close menu</span>
                                    <XIcon className="h-6 w-6" aria-hidden="true" />
                                </button>

                            </div>

                            {/* Links */}
                            <Tab.Group as="div" className="mt-2">
                                <div className="sticky border-b border-gray-200">
                                    <Tab.List className="shadow-xl -mb-px flex px-3 space-x-8 overflow-y-auto">
                                        {navigation.categories.map((category) => (
                                            <Tab
                                                key={category.name}
                                                className={({ selected }) =>
                                                    classNames(
                                                        selected ? 'text-yellow-600 border-yellow-600' : 'text-gray-900 border-transparent',
                                                        'flex-1 whitespace-nowrap py-4 px-1 border-b-2 text-base font-medium'
                                                    )
                                                }
                                            >
                                                {category.name}
                                            </Tab>
                                        ))}
                                    </Tab.List>
                                </div>
                                <Tab.Panels as={Fragment}>
                                    {navigation.categories.map((category) => (
                                        <Tab.Panel key={category.name} className="pt-10 pb-8 px-4 space-y-10">
                                            <div className="grid grid-cols-2 gap-x-4">
                                                {category.featured.map((item) => (
                                                    <div key={item.name} className="group relative text-sm">
                                                        <div className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden group-hover:opacity-75">
                                                            <img src={item.imageSrc} alt={item.imageAlt} className="object-center object-cover" />
                                                        </div>
                                                        <Link to={item.href} className="mt-6 block font-medium text-gray-900">
                                                            <span className="absolute z-10 inset-0" aria-hidden="true" />
                                                            {item.name}
                                                        </Link>
                                                        <p aria-hidden="true" className="mt-1">
                                                            Shop now
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>
                                            {category.sections.map((section) => (
                                                <div key={section.name}>
                                                    <p id={`${category.id}-${section.id}-heading-mobile`} className="font-medium text-gray-900">
                                                        {section.name}
                                                    </p>
                                                    <ul
                                                        aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                                                        className="mt-6 flex flex-col space-y-6"
                                                    >
                                                        {section.items.map((item) => (
                                                            <li key={item.name} className="flow-root">
                                                                <Link to={item.href} className="-m-2 p-2 block text-gray-500">
                                                                    {item.name}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </Tab.Panel>
                                    ))}
                                </Tab.Panels>
                            </Tab.Group>

                            <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                                {navigation.pages.map((page) => (
                                    <div key={page.name} className="flow-root">
                                        <Link to={page.href} className="-m-2 p-2 block font-medium text-gray-900">
                                            {page.name}
                                        </Link>
                                    </div>
                                ))}
                            </div>
                            <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                                <div className="flow-root">
                                    <Link to="/signIn" className="-m-2 p-2 block font-medium text-gray-900">
                                        Dealer Login
                                    </Link>
                                </div>
                                <div className="flow-root">
                                    <Link to="/signUp" className="-m-2 p-2 block font-medium text-gray-900">
                                        Partner Us
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Transition.Child>
                </Dialog>
            </Transition.Root>

            <header className="relative bg-white z-50 w-full">
                <p className="bg-yellow-400 h-10 flex items-center justify-center text-sm font-medium text-black px-4 sm:px-6 lg:px-8">
                    Drem - Design - Decore Your Place With WALL EMPIRE.
                </p>

                <nav aria-label="Top" className="max-w-screen mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="border-b border-gray-200">
                        <div className="h-16 flex items-center">
                            <button
                                type="button"
                                className="bg-white p-2 rounded-md text-gray-400 lg:hidden"
                                onClick={() => setOpen(true)}
                            >
                                <span className="sr-only">Open menu</span>
                                <MenuIcon className="h-6 w-6" aria-hidden="true" />
                            </button>

                            {/* Logo */}
                            <div className="ml-4 flex lg:ml-0">
                                <Link to="/">
                                    <span className="sr-only">{process.env.REACT_APP_NAME}</span>
                                    <img
                                        className="h-8 w-auto"
                                        src={Logo}
                                        alt="wallempire logo"
                                    />
                                </Link>
                            </div>

                            {/* Flyout menus */}
                            <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
                                <div className="h-full flex space-x-8">
                                    {navigation.categories.map((category) => (
                                        <Popover key={category.name} className="flex">
                                            {({ open }) => (
                                                <>
                                                    <div className="relative flex">
                                                        <Popover.Button
                                                            className={classNames(
                                                                open
                                                                    ? 'border-yellow-600 text-yellow-600'
                                                                    : 'border-transparent text-gray-700 hover:text-gray-800',
                                                                'relative z-10 flex items-center transition-colors ease-out duration-200 text-sm font-medium border-b-2 -mb-px pt-px'
                                                            )}
                                                        >
                                                            {category.name} <ChevronDownIcon className="h-5"/>
                                                        </Popover.Button>
                                                    </div>

                                                    <Transition
                                                        as={Fragment}
                                                        enter="transition ease-out duration-200"
                                                        enterFrom="opacity-0"
                                                        enterTo="opacity-100"
                                                        leave="transition ease-in duration-150"
                                                        leaveFrom="opacity-100"
                                                        leaveTo="opacity-0"
                                                    >
                                                        <Popover.Panel className="absolute top-full inset-x-0 text-sm text-gray-500">
                                                            {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                                                            <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />

                                                            <div className={"relative bg-white bg-gradient-to-r " + category.bgImage + " bg-no-repeat bg-right-bottom"}>
                                                                <div className="max-w-7xl mx-auto px-8">
                                                                    <div className="grid grid-cols-2 gap-y-10 gap-x-8 py-16">
                                                                        <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                                                            {category.featured.slice(0, 1).map((item) => (
                                                                                <div key={item.name} className="group relative text-base sm:text-sm">
                                                                                    <div className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden group-hover:opacity-75">
                                                                                        <img
                                                                                            src={item.imageSrc}
                                                                                            alt={item.imageAlt}
                                                                                            className="object-center object-cover"
                                                                                        />
                                                                                    </div>
                                                                                    <Link to={item.href} className="mt-6 block font-medium text-gray-900">
                                                                                        <span className="absolute z-10 inset-0" aria-hidden="true" />
                                                                                        {item.name}
                                                                                    </Link>
                                                                                    <p aria-hidden="true" className="mt-1">
                                                                                        Shop now
                                                                                    </p>
                                                                                </div>
                                                                            ))}
                                                                        </div>
                                                                        <div className="row-start-1 grid grid-cols-2 gap-y-10 gap-x-8 text-sm">
                                                                            {category.sections.map((section) => (
                                                                                <div key={section.name}>
                                                                                    <p id={`${section.name}-heading`} className="font-medium text-gray-900">
                                                                                        {section.name}
                                                                                    </p>
                                                                                    <ul
                                                                                        aria-labelledby={`${section.name}-heading`}
                                                                                        className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                                                                    >
                                                                                        {section.items.map((item) => (
                                                                                            <li key={item.name} className="flex">
                                                                                                <Link to={item.href} className="hover:text-gray-800">
                                                                                                    {item.name}
                                                                                                </Link>
                                                                                            </li>
                                                                                        ))}
                                                                                    </ul>
                                                                                </div>
                                                                            ))}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Popover.Panel>
                                                    </Transition>
                                                </>
                                            )}
                                        </Popover>
                                    ))}

                                    {navigation.pages.map((page) => (
                                        <Link
                                            key={page.name}
                                            to={page.href}
                                            className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                                        >
                                            {page.name}
                                        </Link>
                                    ))}
                                </div>
                            </Popover.Group>

                            <div className="ml-auto flex items-center">

                                {/* Search */}
                                <div className="flex lg:ml-6 md:space-x-6">
                                    <Link to="/" className="p-2 text-gray-400 hover:text-gray-500">
                                        <span className="sr-only">Search</span>
                                        <SearchIcon className="w-6 h-6" aria-hidden="true" />
                                    </Link>
                                </div>

                                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                                    <Link to="/signIn" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                                        Dealer Login
                                    </Link>
                                    <Link to="/signUp" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                                        Partner Us
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Header;