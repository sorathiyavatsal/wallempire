import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

function LargeCard({ img, title, description, buttonText }) {
    return (
        <section className="relative py-16 cursor-pointer">
            <div className="relative h-96 w-full">
                <LazyLoadImage 
                    src={img}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-2xl"
                />
            </div>

            <div className="absolute top-32 left-32">
                <h3 className="text-4xl mb-3 w-80">{title}</h3>
                <p>{description}</p>

                <button className="text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5">{buttonText}</button>
            </div>
        </section>
    )
}

export default LargeCard