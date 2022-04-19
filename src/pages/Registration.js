import React from 'react'
import Header from '../components/Header.js';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from "react-router-dom";
import Footer from '../components/Footer.js';
import axios from 'axios';

class Registration extends React.Component {

    authenticate() {
        return new Promise(resolve => setTimeout(resolve, 1000))
    }

    componentDidMount() {
        this.authenticate().then(() => {
            const ele = document.getElementById('progress-indicator')
            if (ele) {
                ele.classList.add('available')
                setTimeout(() => {
                    ele.outerHTML = ''
                }, 1000)
            }
        })
    }

    constructor(props) {
        super(props);
        this.state = { username: '', company: '', phone: '', email: '', password: '', confirmPassword: '' };

        this.usernamehandleChange = this.usernamehandleChange.bind(this);
        this.companyhandleChange = this.companyhandleChange.bind(this);
        this.phonehandleChange = this.phonehandleChange.bind(this);
        this.emailhandleChange = this.emailhandleChange.bind(this);
        this.passwordhandleChange = this.passwordhandleChange.bind(this);
        this.confirmPasswordhandleChange = this.confirmPasswordhandleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    usernamehandleChange(event) {
        this.setState({ username: event.target.value });
    }

    companyhandleChange(event) {
        this.setState({ company: event.target.value });
    }

    phonehandleChange(event) {
        this.setState({ phone: event.target.value });
    }

    emailhandleChange(event) {
        this.setState({ email: event.target.value });
    }

    passwordhandleChange(event) {
        this.setState({ password: event.target.value });
    }

    confirmPasswordhandleChange(event) {
        this.setState({ confirmPassword: event.target.value });
    }

    handleSubmit(event) {
        axios.post(process.env.REACT_APP_SERVER_API + '/signUp', {
            username: this.state.username,
            phoneNumber: this.state.phone,
            companyName: this.state.company,
            email: this.state.email,
            password: this.state.password,
            confirmPassword: this.state.confirmPassword
        })
            .then(function (response) {
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });

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
                                src="http://wall-empire.com/demo/wp-content/uploads/2021/01/16.jpg" />
                        </div>
                    </div>
                    <div className="lg:w-1/2 xl:max-w-screen-sm">
                        <div className="mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
                            <h1 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-tr from-yellow-400 to-red-600">Welcome</h1>
                            <span>Enter your details and join with <b>WALL EMPIRE</b>.</span>
                            <div className="mt-12">
                                <form onSubmit={this.handleSubmit}>
                                    <div>
                                        <div className="text-sm font-bold text-gray-700 tracking-wide">Username <span className="text-red-600">*</span></div>
                                        <input className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-yellow-500" value={this.state.username} onChange={this.usernamehandleChange} type="text" placeholder="Enter your username" required />
                                    </div>
                                    <div className="mt-8">
                                        <div className="text-sm font-bold text-gray-700 tracking-wide">Company Name <span className="text-red-600">*</span></div>
                                        <input className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-yellow-500" value={this.state.company} onChange={this.companyhandleChange} type="text" placeholder="Enter your company name" required />
                                    </div>
                                    <div className="mt-8">
                                        <div className="text-sm font-bold text-gray-700 tracking-wide">Phone Number <span className="text-red-600">*</span></div>
                                        <input className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-yellow-500" value={this.state.phone} onChange={this.phonehandleChange} type="number" placeholder="1234567890" required />
                                    </div>
                                    <div className="mt-8">
                                        <div className="text-sm font-bold text-gray-700 tracking-wide">Email Address <span className="text-red-600">*</span></div>
                                        <input className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-yellow-500" value={this.state.email} onChange={this.emailhandleChange} type="email" placeholder="xxx@gmail.com" required />
                                    </div>
                                    <div className="mt-8">
                                        <div className="text-sm font-bold text-gray-700 tracking-wide">Password <span className="text-red-600">*</span></div>
                                        <input className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-yellow-500" value={this.state.password} onChange={this.passwordhandleChange} type="password" placeholder="Enter your password" required />
                                    </div>
                                    <div className="mt-8">
                                        <div className="text-sm font-bold text-gray-700 tracking-wide">Confirm Password <span className="text-red-600">*</span></div>
                                        <input className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-yellow-500" value={this.state.confirmPassword} onChange={this.confirmPasswordhandleChange} type="password" placeholder="Enter your confirm password" required />
                                    </div>
                                    <div className="mt-8">
                                        <button className="bg-yellow-500 text-gray-100 p-4 w-full rounded-full tracking-wide font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-yellow-600 shadow-lg">
                                            Sign Up
                                        </button>
                                    </div>
                                </form>
                                <div className="mt-8 mb-8 text-sm font-display font-semibold text-gray-700 text-center">
                                    Already have an account ? <Link to="/signIn" className="cursor-pointer text-yellow-600 hover:text-yellow-800">Sign in</Link>
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

export default Registration
