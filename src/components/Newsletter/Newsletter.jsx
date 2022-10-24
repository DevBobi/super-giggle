import React from 'react';

const Newsletter = () => {
	return (
		<div>
			<div class="flex flex-col w-full mx-auto overflow-hidden shadow-lg dark:bg-coal md:flex-row md:h-24">
				<div class="md:flex md:items-center md:justify-center md:w-1/2 md:bg-coal md:dark:coal">
					<div class="px-6 py-6 md:px-8 md:py-0">
						<h2 class="text-lg font-bold text-gray-700 dark:text-white md:text-gray-100">
							Sign Up For{' '}
							<span class="text-blue-600 dark:text-blue-400 md:text-blue-300">
								Project
							</span>{' '}
							Updates
						</h2>

						<p class="mt-2 text-sm text-gray-600 dark:text-gray-400 md:text-gray-400">
							Lorem ipsum dolor sit, amet consectetur adipisicing
							elit. Consectetur obcaecati odio
						</p>
					</div>
				</div>

				<div class="flex items-center justify-center pb-6 md:py-0 md:w-1/2">
					<form>
						<div class="flex flex-col p-1.5 overflow-hidden border rounded-lg dark:border-gray-600 lg:flex-row dark:focus-within:border-blue-300 focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
							<input
								class="px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none dark:bg-coal dark:placeholder-gray-400 focus:placeholder-transparent dark:focus:placeholder-transparent"
								type="text"
								name="email"
								placeholder="Enter your email"
								aria-label="Enter your email"
							/>

							<button class="px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none">
								subscribe
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Newsletter;
