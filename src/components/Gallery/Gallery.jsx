import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai';

const Gallery = () => {
	return (
		<section className="py-2 px-10 bg-coal dark:text-gray-50">
			<h2 className="container grid grid-cols-2 gap-6 py-4 lg:px-16 tracking-widest md:grid-cols-3 mx-auto  text-gray-200 font-normal text-left pl-4 text-lg uppercase">
				Our Works
			</h2>
			<div className="container grid grid-cols-2 gap-6 py-4 lg:px-16 mx-auto md:grid-cols-3">
				{/* <div>
					<img
						src="https://source.unsplash.com/random/301x301/"
						alt=""
						className="w-full lg:h-[490px] min-h-72 rounded shadow-sm row-span-2"
					/>
				</div> */}



				<div class="group relative w-100">
    			    <img class="w-full object-cover w-100"
					alt='p'
    			        src="https://source.unsplash.com/random/" />
    			    <div class="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center  opacity-0 group-hover:h-full group-hover:opacity-100 duration-500">
    			        <a class="p-5 rounded-full bg-slate-200 hover:bg-slate-400 duration-300" href="#"><AiOutlinePlus/></a>
					</div>
					<div class="absolute w-full bottom-3 left-16 text-white group-hover:bottom-7 duration-500 ">
						<p className='text-lg font-bold uppercase text-slate-200'>experiemntal</p>
						<p className='text-2xl font-bold uppercase'>beautiful girl</p>
					</div>
				</div>
				<div class="group relative w-100">
    			    <img class="w-full object-cover"
					alt='p'
    			        src="https://source.unsplash.com/random/" />
    			    <div class="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center  opacity-0 group-hover:h-full group-hover:opacity-100 duration-500">
    			        <a class="p-5 rounded-full bg-slate-200 hover:bg-slate-400 duration-300" href="#"><AiOutlinePlus/></a>
					</div>
					<div class="absolute w-full bottom-3 left-16 text-white group-hover:bottom-7 duration-500 ">
						<p className='text-lg font-bold uppercase text-slate-200'>experiemntal</p>
						<p className='text-2xl font-bold uppercase'>beautiful girl</p>
					</div>
				</div>
				
				<div class="group relative w-100">
    			    <img class="w-full object-cover"
					alt='p'
    			        src="https://source.unsplash.com/random/" />
    			    <div class="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center  opacity-0 group-hover:h-full group-hover:opacity-100 duration-500">
    			        <a class="p-5 rounded-full bg-slate-200 hover:bg-slate-400 duration-300" href="#"><AiOutlinePlus/></a>
					</div>
					<div class="absolute w-full bottom-3 left-16 text-white group-hover:bottom-7 duration-500 ">
						<p className='text-lg font-bold uppercase text-slate-200'>experiemntal</p>
						<p className='text-2xl font-bold uppercase'>beautiful girl</p>
					</div>
				</div>
				<div class="group relative w-100">
    			    <img class="w-full object-cover"
					alt='p'
    			        src="https://source.unsplash.com/random/" />
    			    <div class="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center  opacity-0 group-hover:h-full group-hover:opacity-100 duration-500">
    			        <a class="p-5 rounded-full bg-slate-200 hover:bg-slate-400 duration-300" href="#"><AiOutlinePlus/></a>
					</div>
					<div class="absolute w-full bottom-3 left-16 text-white group-hover:bottom-7 duration-500 ">
						<p className='text-lg font-bold uppercase text-slate-200'>experiemntal</p>
						<p className='text-2xl font-bold uppercase'>beautiful girl</p>
					</div>
				</div>
				<div class="group relative w-100">
    			    <img class="w-full object-cover"
					alt='p'
    			        src="https://source.unsplash.com/random/" />
    			    <div class="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center  opacity-0 group-hover:h-full group-hover:opacity-100 duration-500">
    			        <a class="p-5 rounded-full bg-slate-200 hover:bg-slate-400 duration-300" href="#"><AiOutlinePlus/></a>
					</div>
					<div class="absolute w-full bottom-3 left-16 text-white group-hover:bottom-7 duration-500 ">
						<p className='text-lg font-bold uppercase text-slate-200'>experiemntal</p>
						<p className='text-2xl font-bold uppercase'>beautiful girl</p>
					</div>
				</div>
				<div class="group relative w-100">
    			    <img class="w-full object-cover"
					alt='phot'
    			        src="https://source.unsplash.com/random/" />
    			    <div class="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center  opacity-0 group-hover:h-full group-hover:opacity-100 duration-500">
    			        <a class="p-5 rounded-full bg-slate-200 hover:bg-slate-400 duration-300" href="#"><AiOutlinePlus/></a>
					</div>
					<div class="absolute w-full bottom-3 left-16 text-white group-hover:bottom-7 duration-500 ">
						<p className='text-lg font-bold uppercase text-slate-200'>experiemntal</p>
						<p className='text-2xl font-bold uppercase'>beautiful girl</p>
					</div>
				</div>
				

				
			</div>
		</section>
	)
}

export default Gallery
