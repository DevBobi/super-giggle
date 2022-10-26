import React from 'react';
import image from '../../assets/contact.png';

const Contact = () => {
	return (
		<section className=" bg-coal dark:text-gray-50">
			<div className="font-normal lg:px-24 py-10 text-gray-200 uppercase text-lg tracking-widest">
				Contact
			</div>
			<div className="grid max-w-7xl grid-cols-1 px-6 py-10 mx-auto lg:px-10 md:px-10 md:grid-cols-2 md:space-x-5">
				<div className="my-6 px-6">
					<img
						alt="team"
						className="object-fill w-full h-auto -mt-16"
						src={image}
					/>
				</div>
				<div>
					<div className="space-y-4 pb-5">
						<h2 classname="text-xl font-extrabold uppercase text-white">
							PHOTOSHOOT RECORDING
						</h2>
						<p classname=" text-white text-base mt-5">
							Where does one find a real photographer nowadays? We
							can deliver a top photographer for your party or
							wedding.
						</p>
					</div>
					<form
						novalidate=""
						className="flex flex-col py-6 space-y-6 md:py-0  ng-untouched ng-pristine ng-valid"
					>
						<div className="flex space-x-2 justify-between">
							<input
								type="text"
								placeholder="Your Name"
								className="block w-full text-sm border border-gray-500 p-1 bg-coal"
							/>
							<input
								type="email"
								placeholder="leroy@jenkins.com"
								className="block w-full text-sm border border-gray-500 p-1 bg-coal"
							/>
						</div>
						<div className="flex space-x-3">
							<input
								type="date"
								placeholder="Date"
								className="block w-full text-sm border border-gray-500 p-1 bg-coal"
							/>
							<input
								type="Time"
								placeholder="leroy@jenkins.com"
								className="block w-full text-sm border border-gray-500 p-1 bg-coal"
							/>
						</div>
						<div className="flex space-x-3">
							<select
								type="select"
								placeholder="Person"
								className="block w-full text-sm border border-gray-500 p-1 bg-coal"
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
								className="block w-full text-sm border border-gray-500 p-1 bg-coal"
							>
								<option selected>Category</option>
								<option value="US">Fashion</option>
								<option value="CA">Branding</option>
								<option value="FR">Nature</option>
							</select>
						</div>
						<label className="block">
							<textarea
								rows="3"
								className="block w-full  border border-gray-500 p-2 bg-coal"
							></textarea>
						</label>
						<button className="px-8 py-3 w-48 text-sm font-semibold text-gray-300 border border-gray-500 uppercase">
							send message
						</button>
					</form>
				</div>
			</div>
		</section>
	);
};

export default Contact;
