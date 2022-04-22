import React from 'react'
import Header from '../components/Header.js';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from "react-router-dom";
import Footer from '../components/Footer.js';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = { email: '', password: '' };

        this.emailhandleChange = this.emailhandleChange.bind(this);
        this.passwordhandleChange = this.passwordhandleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    authenticate() {
        return new Promise(resolve => setTimeout(resolve, 2000))
    }

    componentDidMount() {
        this.authenticate().then(() => {
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

    emailhandleChange(event) {
        this.setState({ email: event.target.value });
    }

    passwordhandleChange(event) {
        this.setState({ password: event.target.value });
    }

    handleSubmit(event) {
        alert('A email : ' + this.state.email + ' ,password : ' + this.state.password);
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <Header />
                <div className="lg:flex md:pt-24">
                    <div className="hidden lg:flex items-center justify-center flex-1 h-screen">
                        <div className="max-w-80 transform duration-200 hover:scale-110 cursor-pointer">
                            <LazyLoadImage
                                className="h-screen"
                                alt="Loading Image"
                                src="https://res.cloudinary.com/wall-empire/image/upload/v1650571665/images/WhatsApp-Image-2020-10-03-at-9.36.26-AM-2_urapfw.jpg" />
                        </div>
                    </div>
                    <div className="lg:w-1/2 xl:max-w-screen-sm">
                        <div className="mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
                            <div className="cursor-pointer flex items-center">
                            </div>
                        </div>
                        <div className="mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
                            <h1 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-tr from-yellow-400 to-red-600">Welcome Back</h1>
                            <span>Enter your email and password to sign in</span>
                            <div className="mt-12">
                                <form onSubmit={this.handleSubmit}>
                                    <div>
                                        <div className="text-sm font-bold text-gray-700 tracking-wide">Email Address</div>
                                        <input className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-yellow-500" value={this.state.email} onChange={this.emailhandleChange} type="email" placeholder="xxx@gmail.com" />
                                    </div>
                                    <div className="mt-8">
                                        <div className="flex justify-between items-center">
                                            <div className="text-sm font-bold text-gray-700 tracking-wide">
                                                Password
                                            </div>
                                            <div>
                                                <Link to="/forgetPassword" className="text-xs font-display font-semibold text-yellow-600 hover:text-yellow-800 cursor-pointer">
                                                    Forgot Password?
                                                </Link>
                                            </div>
                                        </div>
                                        <input className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-yellow-500" value={this.state.password} onChange={this.passwordhandleChange} type="password" placeholder="Enter your password" />
                                    </div>
                                    <div className="mt-10">
                                        <button className="bg-yellow-500 text-gray-100 p-4 w-full rounded-full tracking-wide font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-yellow-600 shadow-lg">
                                            Sign In
                                        </button>
                                    </div>
                                </form>
                                <div className="mt-12 text-sm font-display font-semibold text-gray-700 text-center">
                                    Don't have an account ? <Link to="/signUp" className="cursor-pointer text-yellow-600 hover:text-yellow-800">Sign up</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div >
        )
    }
}

export default Login
