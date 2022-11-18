import React from 'react';
// import ImageCa '../ImageCard2';
// import Image from './Image';
import ImageCard2 from '../ImageCard2'

const HomeGallery = () => {
	return ( 
		<section className="py-4 bg-coal dark:text-gray-50">
			<h2 className="container grid grid-cols-2 gap-6 py-4 lg:px-20 mx-auto md:grid-cols-3 text-gray-300 font-bold text-left pl-4 text-lg uppercase pb-8">
				Our Works
			</h2>
			<div className="container grid grid-cols-1 gap-6 py-4 lg:px-20 mx-auto px-16 md:grid-cols-3">
				<ImageCard2 imageLink={"https://source.unsplash.com/random/?0"} />
				<ImageCard2 imageLink={"https://source.unsplash.com/random/?1"} />
				<ImageCard2 imageLink={"https://source.unsplash.com/random/?2"} />
				<ImageCard2 imageLink={"https://source.unsplash.com/random/?3"} />
				<ImageCard2 imageLink={"https://source.unsplash.com/random/?4"} />
				<ImageCard2 imageLink={"https://source.unsplash.com/random/?5"} />
				<ImageCard2 imageLink={"https://source.unsplash.com/random/?6"} />
				<ImageCard2 imageLink={"https://source.unsplash.com/random/?7"} />
				<ImageCard2 imageLink={"https://source.unsplash.com/random/?8"} />
			</div>
		</section>
	);
};

export default HomeGallery;