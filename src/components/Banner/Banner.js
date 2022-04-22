import { ArrowCircleLeftIcon, ArrowCircleRightIcon } from '@heroicons/react/solid';
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import axios from 'axios';

class Banner extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            current: 0,
            length: 0,
            BannerData: []
        }
    }

    nextBanner = () => {
        this.setState({ current: this.state.current === this.state.length - 1 ? 0 : this.state.current + 1 });
    }

    prevBanner = () => {
        this.setState({ current: this.state.current === 0 ? this.state.length - 1 : this.state.current - 1 });
    }

    setBanner = (e, banner) => {
        this.setState({ current: banner });
    }

    bannerhandler() {
        axios.get(process.env.REACT_APP_SERVER_API + "/banner?type=Main", {
            headers: {
                authorization: 'Basic d2FsbGVtcGlyZTp3YWxsZW1waXJl'
            }
        }).then(bannerRes => {
            if (bannerRes.status === 200) {
                this.setState({ length: bannerRes.data.data.length });
                this.setState({ BannerData: bannerRes.data.data });
            }
        })
    }

    componentDidMount() {
        this.bannerhandler()
    }

    render() {
        return (
            <div className="relative flex items-center z-0 justify-center">
                {this.state.current > 0 ? <ArrowCircleLeftIcon
                    className="h-10 absolute text-yellow-400 flex z-10 left-5 bg-white cursor-pointer rounded-full shadow-lg hover:shadow-none"
                    onClick={this.prevBanner} /> : ""}

                {this.state.current < this.state.length - 1 ? <ArrowCircleRightIcon
                    className="h-10 absolute text-yellow-400 flex z-10 right-5 bg-white cursor-pointer rounded-full shadow-lg hover:shadow-none"
                    onClick={this.nextBanner} /> : ""}

                {this.state.BannerData.map((slide, index) => {
                    return (
                        <div key={index} className={index === this.state.current ? 'slide active' : 'slide'}>
                            {index === this.state.current && (
                                <LazyLoadImage
                                    className="flex relative h-80 sm:h-80 md:h-screen lg:h-screen 2xl:h-screen w-screen"
                                    alt="Banner images"
                                    src={slide.image} />
                            )}
                        </div>
                    )
                })}

                <div className="absolute flex z-10 bottom-0 m-10">
                    {this.state.BannerData.map((slide, index) => {
                        return (
                            <div
                                key={index}
                                className="bg-yellow-400 p-2 z-10 items-center flex-grow float-left 
                                mx-2 rounded-full hover:shadow-md cursor-pointer"
                                onClick={(e) => this.setBanner(e, index)}>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }

}


export default Banner

