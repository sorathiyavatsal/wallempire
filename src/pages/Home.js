import React from 'react'
import Header from '../components/Header.js';
import Banner from '../components/Banner/Banner';
import Footer from '../components/Footer.js';
import LargeCard from '../components/LargeCard.js';
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Link } from 'react-router-dom';
import { ArrowRight, CalendarOutline, CashOutline, ClipboardCheckOutline, ClipboardListOutline } from 'heroicons-react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

class Home extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            exploreData: {},
            cardsData: {}
        };
    }

    authenticate() {
        return new Promise(resolve => setTimeout(resolve, 2000))
    }

    async componentDidMount() {

        await this.authenticate().then(() => {
            const ele = document.getElementById('progress-indicator')
            if (ele) {
                // fade out
                ele.classList.add('available')
                setTimeout(() => {
                    // remove from DOM
                    ele.outerHTML = ''
                }, 2000)
            }
        })
    }

    render() {
        const responsive = {
            superLargeDesktop: {
                // the naming can be any, depends on you.
                breakpoint: { max: 4000, min: 3000 },
                items: 5
            },
            desktop: {
                breakpoint: { max: 3000, min: 1024 },
                items: 4
            },
            tablet: {
                breakpoint: { max: 1024, min: 464 },
                items: 1
            },
            mobile: {
                breakpoint: { max: 464, min: 0 },
                items: 1
            }
        };

        return (
            <div>
                <Header />
                <Banner />

                <main className="max-w-7xl mx-auto px-8 sm:px-16">

                    <section className="pt-20">
                        <div className='w-full md:w-9/12 mb-5'>
                            <h1 className='font-bold md:text-3xl text-2xl'>Shop all things for all home interior</h1>
                            <span className='text-gray-500 md:text-lg text-base text-justify'>Whether it's a magazine-like dream kitchen or your entire home, enjoy end-to-end solutions from design to installation.</span>
                        </div>

                        <div className="grid md:grid-cols-2 grid-cols-1 gap-10 items-center">
                            <div>
                                <LazyLoadImage src="http://wall-empire.com/demo/wp-content/uploads/2021/01/21.jpg" layout="fill" className='rounded-lg' />
                                <div className='pt-3 pl-5'>
                                    <h2 className='text-lg font-bold'>Livespace Select</h2>
                                    <span className='text-gray-500 text-base text-justify'>Choose high quality, budget-friendly modular solutions like sofa set, bed, and more in your favourite colours, sizes, and designs.</span>
                                    <br /><br />
                                    <Link to="" className='text-yellow-600 text-base'>Let's Tell You More <ArrowRight className='relative' /></Link>
                                </div>
                            </div>
                            <div>
                                <LazyLoadImage src="http://wall-empire.com/demo/wp-content/uploads/2021/01/20.jpg" layout="fill" className='rounded-lg' />
                                <div className='pt-3 pl-5'>
                                    <h2 className='text-lg font-bold'>Livespace Vesta</h2>
                                    <span className='text-gray-500 text-base text-justify'>Get the complete home interior experience with award-winning designers, service partners, and the best brands.</span>
                                    <br /><br />
                                    <Link to="" className='text-yellow-600 text-base '>Let's Tell You More <ArrowRight /></Link>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="pt-20">
                        <div className="grid md:grid-cols-2 grid-cols-1 gap-2 items-center">
                            <div className='md:w-8/12'>
                                <h1 className='font-bold md:text-3xl text-2xl'>Ensuring a safe experience from design</h1>
                                <span className='text-gray-500 md:text-lg text-base text-justify'>We're following all protocols to ensure your safety and vaccination drives are underway to ensure our employees are ready to meet you safely.</span> <br /><br />

                                <Link to="/" className='text-yellow-600 text-base w-full'>Read More <ArrowRight className='relative' /></Link>
                            </div>
                            <div>
                                <LazyLoadImage src="http://wall-empire.com/demo/wp-content/uploads/2021/01/09.jpg" layout="fill" className="rounded-lg" />
                            </div>
                        </div>
                    </section>

                    <section className="pt-20">
                        <div className="grid md:grid-cols-2 grid-cols-1 gap-2 items-center">
                            <div className='md:w-8/12 flex justify-center'>
                                <h1 className='font-bold text-3xl'>Why Choose Us</h1>
                            </div>
                            <div className='flex justify-center mt-5 md:justify-end'>
                                <button className="bg-yellow-500 text-gray-100 p-4 w-1/2 rounded-full tracking-wide font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-yellow-600 shadow-lg">
                                    BOOK A CONSULTATION
                                </button>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-4 grid-cols-2 gap-4 pt-10 text-center items-center">
                            <div>
                                <CashOutline className='text-yellow-500 w-20 h-20 mx-auto' />
                                <span className='text-base'>Price match guarantee</span>
                            </div>
                            <div>
                                <CalendarOutline className='text-yellow-500 w-20 h-20 mx-auto' />
                                <span className='text-base'>5 day move-in guarantee³</span>
                            </div>
                            <div>
                                <ClipboardCheckOutline className='text-yellow-500 w-20 h-20 mx-auto' />
                                <span className='text-base'>10 year warranty</span>
                            </div>
                            <div>
                                <ClipboardListOutline className='text-yellow-500 w-20 h-20 mx-auto' />
                                <span className='text-base'>146 quality checks</span>
                            </div>
                        </div>
                    </section>

                    <section className="pt-20">
                        <div className="grid md:grid-cols-2 grid-cols-1 gap-2 items-center">
                            <div>
                                <h1 className='font-bold md:text-3xl text-2xl'>See. Touch. Experience.</h1>
                                <span className='text-gray-500 md:text-lg text-base'>Come to our Experience Centre and get a look and feel of what we do!</span> <br /><br />

                                <Link to="/" className='text-yellow-600 text-base w-full'>Let's Meet <ArrowRight className='relative' /></Link>
                            </div>
                            <div>
                                <LazyLoadImage src="http://wall-empire.com/demo/wp-content/uploads/2020/10/05.jpg" layout="fill" className="rounded-lg" />
                            </div>
                        </div>
                    </section>

                    <section className="pt-20">
                        <div className="grid md:grid-cols-2 grid-cols-1 gap-2">
                            <div className='md:w-8/12'>
                                <h1 className='font-bold md:text-3xl text-2xl flex justify-center'>A little preview of Livspace homes</h1>
                            </div>
                            <div className='flex justify-center mt-5 md:justify-end'>
                                <button className="bg-yellow-500 text-gray-100 p-4 w-1/2 rounded-full tracking-wide font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-yellow-600 shadow-lg">
                                    GET YOUR HOME DESIGN
                                </button>
                            </div>
                        </div>
                        <Carousel responsive={responsive} className='pt-10'>
                            <div class="flex items-center mr-5">
                                <figure class="relative max-w-xs cursor-pointer h-96">
                                    <LazyLoadImage src="http://wall-empire.com/demo/wp-content/uploads/2020/12/WE3422-3.jpg" layout="fill" class="rounded-lg shadow-xl w-full hover:shadow-2xl h-96" />
                                    <div class="absolute text-lg -mt-16 w-full text-white px-4 bg-gradient-to-b from-transparent to-black">
                                        <div>
                                            <h1>Curtains</h1>
                                        </div>
                                        <div>
                                            <h1>Surat</h1>
                                        </div>
                                    </div>
                                </figure>
                            </div>
                            <div class="flex items-center mr-5">
                                <figure class="relative max-w-xs cursor-pointer h-96">
                                    <LazyLoadImage src="http://wall-empire.com/demo/wp-content/uploads/2020/12/WE3425-3.jpg" layout="fill" class="rounded-lg shadow-xl w-full hover:shadow-2xl h-96" />
                                    <div class="absolute text-lg -mt-16 text-white px-4 bg-gradient-to-b from-transparent to-black w-full">
                                        <div>
                                            <h1>Curtains</h1>
                                        </div>
                                        <div>
                                            <h1>Banglore</h1>
                                        </div>
                                    </div>
                                </figure>
                            </div>
                            <div class="flex items-center mr-5">
                                <figure class="relative max-w-xs cursor-pointer h-96">
                                    <LazyLoadImage src="http://wall-empire.com/demo/wp-content/uploads/2020/12/WE3487-3.jpg" layout="fill" class="rounded-lg shadow-xl w-full hover:shadow-2xl h-96" />
                                    <div class="absolute text-lg -mt-16 text-white px-4 bg-gradient-to-b from-transparent to-black w-full">
                                        <div>
                                            <h1>Curtains</h1>
                                        </div>
                                        <div>
                                            <h1>Mubai</h1>
                                        </div>
                                    </div>
                                </figure>
                            </div>
                            <div class="flex items-center mr-5">
                                <figure class="relative max-w-xs cursor-pointer h-96">
                                    <LazyLoadImage src="http://wall-empire.com/demo/wp-content/uploads/2020/12/WE3507-3.jpg" layout="fill" class="rounded-lg shadow-xl hover:shadow-2xl w-full h-96" />
                                    <div class="absolute text-lg -mt-16 text-white px-4 bg-gradient-to-b from-transparent to-black w-full">
                                        <div>
                                            <h1>Curtains</h1>
                                        </div>
                                        <div>
                                            <h1>Dehli</h1>
                                        </div>
                                    </div>
                                </figure>
                            </div>
                            <div class="flex items-center mr-5">
                                <figure class="relative max-w-xs cursor-pointer h-96">
                                    <LazyLoadImage src="http://wall-empire.com/demo/wp-content/uploads/2020/12/WE3464-3.jpg" layout="fill" class="rounded-lg shadow-xl w-full hover:shadow-2xl h-96" />
                                    <div class="absolute text-lg -mt-16 text-white px-4 bg-gradient-to-b from-transparent to-black w-full">
                                        <div>
                                            <h1>Curtains</h1>
                                        </div>
                                        <div>
                                            <h1>Subtitle</h1>
                                        </div>
                                    </div>
                                </figure>
                            </div>
                        </Carousel>
                    </section>

                    <LargeCard
                        img="https://links.papareact.com/4cj"
                        title="Your dream home is just a click away"
                        description="Wishlists curated by WALLEMPIRE."
                        buttonText="Get Inspired"
                    />
                </main>

                <Footer />
            </div>
        )
    }
}

export default Home
