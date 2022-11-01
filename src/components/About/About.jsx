import React from 'react';

const About = () => {
	return (
		<section class="bg-coal dark:bg-coal py-20 ">
				<div class="lg:flex lg:items-center justify-center">
					<img
						class="object-cover object-center lg:w-1/2 lg:p-12 w-full h-96 rounded-lg lg:h-[36rem]"
						src="https://livewp.site/wp/md/oni/wp-content/uploads/sites/60/2019/05/video_cover.jpg"
						alt=""
					/>

					<div class="mt-8 lg:w-96 lg:px-6 lg:mt-0 lg:relative">
						<div className="lg:absolute items-center right-36 bottom-[340px]">
							<h1 class="text-lg font-semibold text-white dark:text-white xl:text-3xl lg:w-[500px] leading-relaxed italic tracking-normal">
								“Photography is an art. And when you are part of
								art, this is bliss.”
							</h1>
							<p class="text-xl italic font-semibold text-gray-300 ">
								___ Joan Dean
							</p>
						</div>
						<p class="lg:w-56 text-gray-500 dark:text-gray-400 ">
							I shoot because I see. I shoot because if I don’t, I
							don’t know who will. Activism is seen as a dirty
							word. I shoot because I find peace in being
							especially active, and being a vigorous advocate for
							a cause. Photography can defeat time. Images can
							keep the memory of a loved one alive, hold a moment
							in history for future generations, be a witness to
							tragedy or joy.
						</p>
					</div>
				</div>
		</section>
	);
};

export default About;
