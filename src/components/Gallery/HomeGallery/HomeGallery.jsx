import React, { useEffect, useState } from 'react';
// import ImageCa '../ImageCard2';
// import Image from './Image';
import ImageCard2 from '../ImageCard2'

const HomeGallery = () => {
	const [data, setData] = useState([])

	useEffect(() => {
		fetch('http://localhost:5000/gallery')
			.then(response => response.json())
			.then(data => setData(data.data))
			.catch((e) => console.log('error', e))
	}, []);

	return ( 
		<section className="py-4 bg-coal dark:text-gray-50">
			<h2 className="container grid grid-cols-2 gap-6 py-4 lg:px-20 mx-auto md:grid-cols-3 text-gray-300 font-bold text-left pl-4 text-lg uppercase pb-8">
				Our Works
			</h2>
			<div className="container grid grid-cols-1 gap-6 py-4 lg:px-20 mx-auto px-16 md:grid-cols-3">
				{data?.map(itm => <ImageCard2 data={itm} />)}
			</div>
		</section>
	);
};

export default HomeGallery;