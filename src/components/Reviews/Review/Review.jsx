import React from 'react';
import profileImage from '../../../assets/3135715.png'

const Review = ({data}) => {
    console.log(data)
    return (
        <section>
            <div className='flex flex-col justify-center items-center'>
                <h1 class="text-lg md:text-1xl font-semibold text-white xl:text-3xl lg:w-[500px] leading-relaxed italic tracking-normal">
					“{data.text}”
                </h1>
                <div className='flex flex-col justify-center items-center mt-10'>
                    <img className='h-16 w-16 rounded-full' src={data.image} alt="" srcset="" />
                    <p className='text-sm font-semibold mt-5'>{data.user}</p>
                </div>
            </div>
        </section>
    );
};

export default Review;