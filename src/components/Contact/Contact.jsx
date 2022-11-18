import React from 'react';
import sajjad from '../../assets/sajjad_saju.jpg'

const Contact = () => {


	return (
		<section className=" bg-coal dark:text-gray-50 px-24 py-20">
			<div className="font-normal px-4 pb-24 text-gray-200 uppercase text-lg tracking-widest">
				Contact Us
			</div>
			<div className="grid max-w-7xl grid-cols-1 mx-auto md:px-10 md:grid-cols-2 md:space-x-5 justify-center items-center">
				<div className="my-6 px-6">
					<img
						alt="team"
						className="object-cover w-full h-[620px] rounded-lg -mt-16"
						src={sajjad}
					/>
				</div>
				<div>
					<div className="font-normal py-5 text-gray-200 uppercase text-lg tracking-widest">
						PHOTOSHOOT RECORDING
					</div>
					<div className="font-normal pb-10 text-gray-400 uppercase text-sm">
						Where does one find a real photographer nowadays? We
						can deliver a top photographer for your party or
						wedding.
					</div>
					<form
						novalidate=""
						className="flex flex-col py-6 space-y-6 md:py-0  ng-untouched ng-pristine ng-valid"
					>
						<div className="flex space-x-2 justify-between">
							<input
								type="text"
								placeholder="Your Name"
								className="block w-full text-sm border border-gray-500 p-1 px-2 bg-transparent h-12 rounded-md"
							/>
							<input
								type="email"
								placeholder="example@mail.com"
								className="block w-full text-sm border border-gray-500 p-1 px-2 bg-transparent h-12 rounded-md"
							/>
						</div>
						<div className="flex space-x-3">
							<input
								type="date"
								style={{ filter: 'invert(.7)', color: 'black' }}
								className="block w-full text-sm border border-gray-500 p-1 px-2 bg-transparent h-12 rounded-md"
							/>
							<input
								type="time"
								style={{ filter: 'invert(.7)', color: 'black' }}
								value="16:00:00"
								className="block w-full text-sm border border-gray-500 p-1 px-2 bg-transparent h-12 rounded-md"
							/>
						</div>
						<div className="flex space-x-3">
							<select
								type="select"
								placeholder="Person"
								className="block w-full text-sm border border-gray-500 p-1 px-2 bg-transparent h-12 rounded-md"
							>
								<option selected>Persons</option>
								<option value="US">1</option>
								<option value="CA">2</option>
								<option value="FR">3</option>
								<option value="DE">3</option>
							</select>
							<select
								type="select"
								placeholder="Person"
								className="block w-full text-sm border border-gray-500 p-1 px-2 bg-transparent h-12 rounded-md"
							>
								<option selected>Category</option>
								<option value="US">Fashion</option>
								<option value="CA">Branding</option>
								<option value="FR">Nature</option>
							</select>
						</div>
						<label className="block">
							<textarea
								rows="4"
								placeholder='Hi...'
								className="block w-full  border border-gray-500 p-2 bg-transparent rounded-md"
							></textarea>
						</label>
						<button className="px-8 py-3 rounded-md hover:border-x-2 w-48 text-sm font-semibold text-gray-300 border border-gray-500 uppercase">
							send message
						</button>
					</form>
				</div>
			</div>
		</section>
	);
};

export default Contact;
