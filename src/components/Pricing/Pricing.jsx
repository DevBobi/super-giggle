import React from 'react';

const Pricing = () => {
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
					<div className="flex flex-wrap items-stretch -mx-4">

						<div className="flex  w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
							<div className="flex flex-col p-6 space-y-6 rounded-lg shadow sm:p-8 dark:bg-[#2b2b2c] dark:text-gray-200">
								<div className="space-y-2">
									<h4 className="text-md font-light">
										Silver
									</h4>
									<span className="text-4xl font-bold">
										$24
									</span>
								</div>
								<p className="leading-relaxed font-light">
									Morbi cursus ut sapien sit amet consectetur.
								</p>
								<ul className="flex-1 space-y-2">
									<li className="flex items-center space-x-2">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 20 20"
											fill="currentColor"
											className="flex-shrink-0 w-6 h-6"
										>
											<path
												fillRule="evenodd"
												d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
												clipRule="evenodd"
											></path>
										</svg>
										<span>Everything in Free</span>
									</li>
									<li className="flex items-center space-x-2">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 20 20"
											fill="currentColor"
											className="flex-shrink-0 w-6 h-6"
										>
											<path
												fillRule="evenodd"
												d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
												clipRule="evenodd"
											></path>
										</svg>
										<span>Phasellus tellus</span>
									</li>
									<li className="flex items-center space-x-2">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 20 20"
											fill="currentColor"
											className="flex-shrink-0 w-6 h-6"
										>
											<path
												fillRule="evenodd"
												d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
												clipRule="evenodd"
											></path>
										</svg>
										<span>Praesent faucibus</span>
									</li>
									<li className="flex items-center space-x-2">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 20 20"
											fill="currentColor"
											className="flex-shrink-0 w-6 h-6"
										>
											<path
												fillRule="evenodd"
												d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
												clipRule="evenodd"
											></path>
										</svg>
										<span>Aenean et lectus blandit</span>
									</li>
								</ul>
								<button className="inline-block w-full px-5 py-3 font-bold tracking-wider text-center rounded dark:bg-gray-100 dark:text-gray-700">
									Get Started
								</button>
							</div>
						</div>
						<div className="flex  w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
							<div className="flex flex-col p-6 space-y-6 rounded-lg shadow sm:p-8 dark:bg-[#2b2b2c] dark:text-gray-200">
								<div className="space-y-2">
									<h4 className="text-md font-light">
										Silver
									</h4>
									<span className="text-4xl font-bold">
										$24
									</span>
								</div>
								<p className="leading-relaxed font-light">
									Morbi cursus ut sapien sit amet consectetur.
								</p>
								<ul className="flex-1 space-y-2">
									<li className="flex items-center space-x-2">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 20 20"
											fill="currentColor"
											className="flex-shrink-0 w-6 h-6"
										>
											<path
												fillRule="evenodd"
												d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
												clipRule="evenodd"
											></path>
										</svg>
										<span>Everything in Free</span>
									</li>
									<li className="flex items-center space-x-2">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 20 20"
											fill="currentColor"
											className="flex-shrink-0 w-6 h-6"
										>
											<path
												fillRule="evenodd"
												d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
												clipRule="evenodd"
											></path>
										</svg>
										<span>Phasellus tellus</span>
									</li>
									<li className="flex items-center space-x-2">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 20 20"
											fill="currentColor"
											className="flex-shrink-0 w-6 h-6"
										>
											<path
												fillRule="evenodd"
												d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
												clipRule="evenodd"
											></path>
										</svg>
										<span>Praesent faucibus</span>
									</li>
									<li className="flex items-center space-x-2">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 20 20"
											fill="currentColor"
											className="flex-shrink-0 w-6 h-6"
										>
											<path
												fillRule="evenodd"
												d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
												clipRule="evenodd"
											></path>
										</svg>
										<span>Aenean et lectus blandit</span>
									</li>
								</ul>
								<button className="inline-block w-full px-5 py-3 font-bold tracking-wider text-center rounded dark:bg-gray-100 dark:text-gray-700">
									Get Started
								</button>
							</div>
						</div>
						<div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
							<div className="flex flex-col p-6 space-y-6 rounded-lg border-gray-400 shadow sm:p-8 border ">
								<div className="space-y-2">
									<h4 className="text-md font-light">
										Platinum
									</h4>
									<span className="text-4xl font-bold">
										$74
									</span>
								</div>
								<p className="mt-3 leading-relaxed dark:text-gray-400 font-light">
									Etiam ac convallis enim, eget euismod dolor.
								</p>
								<ul className="flex-1 mb-6 dark:text-gray-400">
									<li className="flex mb-2 space-x-2">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 20 20"
											fill="currentColor"
											className="flex-shrink-0 w-6 h-6 dark:text-gray-400"
										>
											<path
												fillRule="evenodd"
												d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
												clipRule="evenodd"
											></path>
										</svg>
										<span>Aenean quis</span>
									</li>
									<li className="flex mb-2 space-x-2">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 20 20"
											fill="currentColor"
											className="flex-shrink-0 w-6 h-6 dark:text-gray-400"
										>
											<path
												fillRule="evenodd"
												d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
												clipRule="evenodd"
											></path>
										</svg>
										<span>Morbi semper</span>
									</li>
									<li className="flex mb-2 space-x-2">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 20 20"
											fill="currentColor"
											className="flex-shrink-0 w-6 h-6 dark:text-gray-400"
										>
											<path
												fillRule="evenodd"
												d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
												clipRule="evenodd"
											></path>
										</svg>
										<span>Morbi semper</span>
									</li>
									<li className="flex mb-2 space-x-2">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 20 20"
											fill="currentColor"
											className="flex-shrink-0 w-6 h-6 dark:text-gray-400"
										>
											<path
												fillRule="evenodd"
												d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
												clipRule="evenodd"
											></path>
										</svg>
										<span>Morbi semper</span>
									</li>
									<li className="flex mb-2 space-x-2">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 20 20"
											fill="currentColor"
											className="flex-shrink-0 w-6 h-6 dark:text-gray-400"
										>
											<path
												fillRule="evenodd"
												d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
												clipRule="evenodd"
											></path>
										</svg>
										<span>Tristique enim nec</span>
									</li>
								</ul>
								<button className="inline-block w-full px-5 py-3 font-bold tracking-wider text-center rounded dark:bg-gray-100 dark:text-gray-700">
									Get Started
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Pricing;
