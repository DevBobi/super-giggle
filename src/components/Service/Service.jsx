import React from 'react';
import Item from './Item';

const Service = () => {
	return (
		<section classname="text-gray-600 body-font bg-coal p-16">
			<div classname="container px-5 mx-auto">
				<h1 classname="text-3xl font-medium title-font text-gray-200 mb-8 text-center">
					SERVICE PACKAGE
				</h1>
				<div classname="flex flex-wrap -m-4">
					<Item />
					<Item />
					<Item />
				</div>
			</div>
		</section>
	);
};

export default Service;
