import React from 'react'
import {BiSticker} from 'react-icons/bi'

const PricingCard = ({data}) => {
    return (
        <div  className="flex mt-8 w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/4 lg:mb-0">
            <div className="flex pb-5 flex-col space-y-6 rounded-lg shadow dark:bg-[#2b2b2c] dark:text-gray-200">
                <div className="space-y-2 sm:p-8 rounded-t-md" style={{background: `linear-gradient(90deg, rgba(0,0,0,0.30) 0%, rgba(0,0,0,0.30) 100%), url(${data.image})`}}>
                    <h4 className="text-md">
                        {data?.name}
                    </h4>
                    <span className="text-4xl font-bold">
                        ${data?.price}
                    </span>
                </div>
                <p className="px-8 leading-relaxed font-light">
                    You'll get the following features
                </p>
                <ul className="flex-1 px-8 space-y-2">
                    <li className="flex items-center space-x-2">
                        <BiSticker />
                        <span>Total photographer: {data.photographerQuality} </span>
                    </li>
                    <li className="flex items-center space-x-2">
                        <BiSticker />
                        <span>Cinematographer: {data.cinematographerQuantity} </span>
                    </li>
                    <li className="flex items-center space-x-2">
                        <BiSticker />
                        <span>Trailer duration: {data.trailerLength} </span>
                    </li>
                    <li className="flex items-center space-x-2">
                        <BiSticker />
                        <span>Video duration: {data.duration} </span>
                    </li>
                    <li className="flex items-center space-x-2">
                        <BiSticker />
                        <span>Printed picture: {data.printedPicture} </span>
                    </li>
                </ul>
                <button className="mx-4 inline-block px-5 py-3 font-bold tracking-wider text-center rounded dark:bg-gray-100 dark:text-gray-700">
                    Get Started
                </button>
            </div>
        </div>
    )
}

export default PricingCard