import React, { useEffect, useState } from "react";

import { HiOutlineSearch } from "react-icons/hi";
import Review from "./Review/Review";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './Reviews.css'

import { Navigation, Pagination, Autoplay } from "swiper";

const Reviews = () => {

	const [data, setData] = useState([])

	useEffect(() => {
		fetch('http://localhost:5000/testimonial')
			.then(response => response.json())
			.then(data => setData(data.data))
			.catch((e) => console.log('error', e))
	}, []);

	return (
		<section className="bg-coal text-gray-200 body-font px-24">
			<div className="container mx-auto grid md:grid-cols-1 xs:grid-cols-1 py-0 absuolute top-1/2 left-1/2  translate-1/2">
				<div className="grid items-center text-center my-20">
					<div className="text-1xl lg:text-2xl xl:text-3xl font-bold mt-2 text-white">
						WHAT PEOPLE SAY
					</div>
				</div>
				<div className="text-center my-20">
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
						navigation={true}
						modules={[Autoplay, Pagination, Navigation]}
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
						{
							data?.map((item) => (
								<SwiperSlide className="pb-24">
									<Review data={item} />
								</SwiperSlide>
							))
						}
					</Swiper>
				</div>
			</div>
		</section>
	)
};

export default Reviews;