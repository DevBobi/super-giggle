import React from 'react';
import profileImage from '../../../assets/3135715.png'

const Review = () => {
    return (
        <section>
            <div className='flex flex-col justify-center items-center'>
                <h1 class="text-lg md:text-1xl font-semibold text-white xl:text-3xl lg:w-[500px] leading-relaxed italic tracking-normal">
					“Photography is an art. And when you are part of
					art, this is bliss.”
                </h1>
                <div className='flex flex-col justify-center items-center mt-10'>
                    <img className='h-16 w-16' src={profileImage} alt="" srcset="" />
                    <p className='text-sm font-semibold mt-5'>Abul Monshi</p>
                </div>
            </div>
        </section>
    );
};

export default Review;