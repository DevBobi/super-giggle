import React from "react";
import bannerBG from "../../assets/311634251_2178888665651407_1413025571303879858_n.jpg";

import { HiOutlineSearch } from "react-icons/hi";
import Review from "./Review/Review";
import { Swiper, SwiperSlide } from "swiper/react";



// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination,Autoplay } from "swiper";

const Reviews = () => {
//   let navigation = useNavigate();

	return (
	  <section className="bg-coal text-gray-200 body-font">
	  	{/* <div className="relative max-h-full md:pb-0 min-h-screen bg-cover" style={{ backgroundImage: `url(${bannerBG})` }}> */}
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
          				  <SwiperSlide className="pb-20">
          				    <Review/>
          				  </SwiperSlide>
          				  <SwiperSlide className="pb-20">
          				    <Review/>
          				  </SwiperSlide>
          				  <SwiperSlide className="pb-20">
          				    <Review/>
          				  </SwiperSlide>
          				  <SwiperSlide className="pb-20">
          				    <Review/>
          				  </SwiperSlide>
          				  <SwiperSlide className="pb-20">
          				    <Review/>
          				  </SwiperSlide>
          				  <SwiperSlide className="pb-20">
          				    <Review/>
          				  </SwiperSlide>          
          				  <SwiperSlide className="pb-20">
          				    <Review/>
          				  </SwiperSlide>          
          				</Swiper>
				</div>
      		</div>
    	{/* </div> */}
	</section>
)};

export default Reviews;
