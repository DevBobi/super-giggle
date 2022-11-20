import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai';

const Image = ({data}) => {
    return (
        <div>
            <div className="group relative w-100 border rounded-lg">
                <img className="object-cover w-full h-[256px] rounded-lg"
                    alt='p'
                    src={data?.image}
                />
                <div className="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center  opacity-0 group-hover:h-full group-hover:opacity-100 duration-500">
                    <a target="_blank" rel="noopener noreferrer" href={data?.albumLink} className="p-5 rounded-full bg-slate-200 hover:bg-slate-100 bg-opacity-60 duration-300" href="#"><AiOutlinePlus /></a>
                </div>
                <div className="absolute w-full bottom-2 left-16 text-white group-hover:bottom-6 duration-500 ">
                    <p className='text-base w-full font-bold uppercase text-slate-200'>{data?.title}</p>
                </div>
            </div>
        </div>
    )
}

export default Image