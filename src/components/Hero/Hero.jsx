import React from "react";
import hero from '../../assets/311634251_2178888665651407_1413025571303879858_n.jpg'
import bannerBG from '../../assets/banngerBG.jpg'

import { HiOutlineSearch } from "react-icons/hi";
// import Review from "./Review/Review";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// import "swiper/css/navigation";
// import './Reviews.css'

import { Navigation, Pagination,Autoplay } from "swiper";

const Hero = () => {

	return (
	  <section className="bg-coal text-gray-200 body-font">
      	{/* <div className="container mx-auto grid md:grid-cols-1 xs:grid-cols-1 py-0 absuolute top-1/2 left-1/2  translate-1/2"> */}
		  	<div className="text-center">
				  <Swiper
        			  slidesPerView={1}
        			  spaceBetween={30}
        			  centeredSlides={true}
        			  autoplay={{
        			    delay: 2500,
        			    disableOnInteraction: false,
        			  }}
        			  pagination={{
        			    clickable: true,
        			  }}
        			  modules={[Autoplay, Pagination]}
        			  className="mySwiper"
        			  breakpoints={{
        			    "@0.00": {
        			      slidesPerView: 1,
        			    },
        			    "@1.50": {
        			      slidesPerView: 1,
        			    },
        			    "@1.75": {
        			      slidesPerView: 1,
        			    },
        			  }}
        			>
        			  <SwiperSlide className="pb-24">
        			    <div className="relative min-h-screen md:pb-0 pt-28 bg-cover" style={{ backgroundImage: `url(${hero})` }}>
							<div className="container mx-auto grid md:grid-cols-2 xs:grid-cols-1 content-center absuolute">
								
    					  </div>
    					</div>
        			  </SwiperSlide>
        			  <SwiperSlide className="pb-24">
        			    <div className="relative min-h-screen md:pb-0 pt-28 bg-cover" style={{ backgroundImage: `url(${bannerBG})` }}>
    					  <div className="container mx-auto grid md:grid-cols-2 xs:grid-cols-1 absuolute">
    					  </div>
    					</div>
        			  </SwiperSlide>
        			  <SwiperSlide className="pb-24">
        			    <div className="relative min-h-screen md:pb-0 pt-28 bg-cover" style={{ backgroundImage: `url(${hero})` }}>
    					  <div className="container mx-auto grid md:grid-cols-2 xs:grid-cols-1 absuolute">
    					  </div>
    					</div>
        			  </SwiperSlide>
        			  <SwiperSlide className="pb-24">
        			    <div className="relative min-h-screen md:pb-0 pt-28 bg-cover" style={{ backgroundImage: `url(${bannerBG})` }}>
    					  <div className="container mx-auto grid md:grid-cols-2 xs:grid-cols-1 absuolute">
    					  </div>
    					</div>
        			  </SwiperSlide>
        			</Swiper>
			</div>
      	{/* </div> */}
	</section>
)};

export default Hero;








// import React from 'react';

// const Hero = () => {
// 	return (
// 		<section className="bg-coal px-16">
// 			<div className="container flex flex-col justify-center p-6 mx-auto sm:py-16 lg:py-20 lg:flex-row lg:justify-between">
// 				<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-2xl lg:text-left ">
// 					<h1 className="text-5xl text-white font-semibold leading-none sm:text-6xl italic">
// 						Creative Direction, Design & Photography.
// 					</h1>
// 					<p className="mt-6 mb-8 text-gray-400 text-base text- sm:mb-12">
// 						I shoot because I see. I shoot because if I don’t, I
// 						don’t know who will.
// 						<br className="hidden md:inline lg:hidden" /> Activism
// 						is seen as a dirty word. I shoot because I find peace in
// 						being .
// 					</p>
// 					<div className=" space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
// 						<button className="px-8 py-3 text-sm font-semibold text-gray-300 border border-gray-500">
// 							Contact Us <span>  </span>
// 						</button>
// 					</div>
// 				</div>
// 				<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 ">
// 					<svg
// 						xmlns="http://www.w3.org/2000/svg"
// 						fill="none"
// 						viewBox="0 0 24 24"
// 						stroke-width="1"
// 						stroke="currentColor"
// 						className="w-24 h-24 text-white"
// 					>
// 						<path
// 							stroke-linecap="round"
// 							stroke-linejoin="round"
// 							d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
// 						/>
// 						<path
// 							stroke-linecap="round"
// 							stroke-linejoin="round"
// 							d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
// 						/>
// 					</svg>
// 				</div>
// 			</div>
// 		</section>
// 	);
// };

// export default Hero;
