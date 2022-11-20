import React, { useEffect, useState } from 'react';
import PricingCard from './PricingCard';

const Pricing = () => {
	const [data, setData] = useState([])

	useEffect(() => {
		fetch('http://localhost:5000/package')
			.then(response => response.json())
			.then(data => setData(data.data))
			.catch((e) => console.log('error', e))
	}, []);

	return (
		<section className="bg-coal px-24">
			<div className="container mx-auto py-20 text-gray-100">
				{/* <h2 className="container grid grid-cols-2 gap-6 py-4  pb-10 mx-auto md:grid-cols-3 text-gray-300 font-bold text-left pl-4 text-lg uppercase">
					Packages
				</h2> */}
				<div className="container grid grid-cols-2 gap-6 py-4  md:grid-cols-2 mx-auto  text-gray-300 font-medium text-left pl-4 text-lg uppercase pb-14">
					<div>Our Packages</div>
					<div className="flex flex-auto justify-end felx-col text-uppercase">
						<h2 className="mx-5 hover:underline decoration-2">
							Dhaka
						</h2>
						<h2 className="mx-5 hover:underline decoration-2">
							Outside Dhaka
						</h2>
					</div>
				</div>
				<div className="container px-4 mx-auto">
					<div className="flex flex-wrap ">
						{data?.map((item) => <PricingCard data={item} />)}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Pricing;
