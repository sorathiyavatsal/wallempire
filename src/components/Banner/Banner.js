import { ArrowCircleLeftIcon, ArrowCircleRightIcon } from '@heroicons/react/solid';
import React, {useState} from 'react';
import { BannerData } from './BannerData';
import { LazyLoadImage } from 'react-lazy-load-image-component';

function Banner() {

    const [current, setCurrent] = useState(0);
    const length = BannerData.length;

    const nextBanner = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    }

    const prevBanner = () => {
        setCurrent(current === 0 ? length - 1: current - 1);
    }

    const setBanner = (e, banner) => {
        setCurrent(banner);
    }

    if(!Array.isArray(BannerData) || BannerData.length <= 0) {
        return null;
    }

    return (
        <div className="relative flex items-center z-0 justify-center">
            <ArrowCircleLeftIcon 
                className="h-10 absolute text-yellow-400 flex z-10 left-5 bg-white cursor-pointer rounded-full shadow-lg hover:shadow-none"
                onClick={prevBanner} />
            <ArrowCircleRightIcon 
                className="h-10 absolute text-yellow-400 flex z-10 right-5 bg-white cursor-pointer rounded-full shadow-lg hover:shadow-none" 
                onClick={nextBanner}/>
            
            {BannerData.map((slide, index) => {
                return(
                    <div key={index} className={index === current ? 'slide active' : 'slide'}>
                        {index === current && (
                            <LazyLoadImage
                            className="flex relative h-80 sm:h-80 md:h-screen lg:h-screen 2xl:h-screen w-screen"
                            alt="Banner images"
                            src={slide.image} />
                        )}
                    </div>
                )
            })}

            <div className="absolute flex z-10 bottom-0 m-10">
                {BannerData.map((slide, index) => {
                    return (
                        <div 
                            key={index}
                            className="bg-yellow-400 p-2 z-10 items-center flex-grow float-left 
                            mx-2 rounded-full hover:shadow-md cursor-pointer"
                            onClick={(e) => setBanner(e, index)}>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}


export default Banner
