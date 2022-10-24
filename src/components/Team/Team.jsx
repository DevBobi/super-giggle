import React from 'react';

const Team = () => {
	return (
		<section className="lg:px-20 bg-coal">
			<h2 className="text-gray-200 font-medium text-left pl-4 text-base uppercase pb-8">
				Our Teams
			</h2>
			<div className="container lg:px-16 flex flex-col justify-center p-4 mx-auto ">
				<div className="grid grid-cols-1 lg:grid-cols-4">
					<img
						alt="team"
						className="object-cover w-full h-96 dark:bg-gray-500 aspect-square"
						src="https://livewp.site/wp/md/oni/wp-content/uploads/sites/60/2019/05/Marcus-Flint-540x654.jpg"
					/>
					<img
						alt="team"
						className="object-cover w-full h-96 dark:bg-gray-500 aspect-square"
						src="	https://livewp.site/wp/md/oni/wp-content/uploads/sites/60/2019/05/Donna-Holley-540x654.jpg"
					/>
					<img
						alt="team"
						className="object-cover w-full h-96 dark:bg-gray-500 aspect-square"
						src="	https://livewp.site/wp/md/oni/wp-content/uploads/sites/60/2019/05/Jason-Ford-540x654.jpg"
					/>
					<img
						alt="team"
						className="object-cover w-full h-96 dark:bg-gray-500 aspect-square"
						src="	https://livewp.site/wp/md/oni/wp-content/uploads/sites/60/2019/05/Emma-Doe-540x654.jpg"
					/>
				</div>
			</div>
		</section>
	);
};

export default Team;
