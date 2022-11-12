import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai';

const Image = ({imageLink}) => {
    return (
        <div>
            <div className="group relative w-[355px] h-[256px] border rounded-lg">
                <img className="object-cover w-[355px] h-[256px] rounded-lg mx-auto"
                // <img className="object-cover w-[355px] h-[256px] rounded-lg mx-auto"
                    alt='p'
                    src={imageLink}
                />
                <div className="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center  opacity-0 group-hover:h-full group-hover:opacity-100 duration-500">
                    <a className="p-5 rounded-full bg-slate-200 hover:bg-slate-100 bg-opacity-60 duration-300" href="#"><AiOutlinePlus /></a>
                </div>
                <div className="absolute w-full bottom-2 left-16 text-white group-hover:bottom-6 duration-500 ">
                    <p className='text-base font-bold uppercase text-slate-200'>experiemntal</p>
                </div>
            </div>
        </div>
    )
}

export default Image