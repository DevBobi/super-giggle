import React from 'react'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import Image from './Image';

const Gallery = () => {
	return (
		<section className="py-2 pb-16 px-16 bg-coal dark:text-gray-50">
			<h2 className="container grid grid-cols-2 gap-6 py-4 lg:px-16 mx-auto md:grid-cols-3 mx-auto  text-gray-200 font-medium text-left pl-4 text-lg uppercase pb-8">
				Our Works
			</h2>
			<div className="container py-4 lg:px-16 mx-auto md:grid-cols-3">
				<ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }} >
					<Masonry gutter='30px' columnsCount={3} >
						<Image imageLink={"https://source.unsplash.com/random/?0"} />
						<Image imageLink={"https://source.unsplash.com/random/?1"}/>
						<Image imageLink={"https://source.unsplash.com/random/?2"}/>
						<Image imageLink={"https://source.unsplash.com/random/?3"}/>
						<Image imageLink={"https://source.unsplash.com/random/?4"}/>
						<Image imageLink={"https://source.unsplash.com/random/?5"}/>
						<Image imageLink={"https://source.unsplash.com/random/?6"}/>
						<Image imageLink={"https://source.unsplash.com/random/?7"}/>
					</Masonry>
				</ResponsiveMasonry>
			</div>
		</section>
	)
}

export default Gallery
