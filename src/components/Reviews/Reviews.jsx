/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const Reviews = () => {
	return (
		<section className="bg-coal px-16">
			<div className="container flex flex-col justify-center p-6 mx-auto sm:py-16 lg:py-20 lg:flex-row lg:justify-between">
				<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-2xl lg:text-left ">
					<h1 className="text-5xl text-white font-semibold leading-none sm:text-6xl italic">
						Creative Direction, Design & Photography.
					</h1>
					<p className="mt-6 mb-8 text-gray-400 text-base text- sm:mb-12">
						I shoot because I see. I shoot because if I don’t, I
						don’t know who will.
						<br className="hidden md:inline lg:hidden" /> Activism
						is seen as a dirty word. I shoot because I find peace in
						being .
					</p>
					<div className=" space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
						<button className="px-8 py-3 text-sm font-semibold text-gray-300 border border-gray-500">
							Contact Us <span>  </span>
						</button>
					</div>
				</div>
				<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 ">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1"
						stroke="currentColor"
						className="w-24 h-24 text-white"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
						/>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
						/>
					</svg>
				</div>
			</div>
		</section>
	);
};

export default Reviews;
