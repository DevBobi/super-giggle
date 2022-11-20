import React, { useEffect, useState } from 'react';
import Member from './Member';

const Team = () => {
	const [data, setData] = useState([])

	useEffect(() => {
		fetch('http://localhost:5000/team')
			.then(response => response.json())
			.then(data => setData(data.data))
			.catch((e) => console.log('error', e))
	}, []);

	return (
		<section className="lg:px-24 py-10 bg-coal">
			<div className="font-normal px-4 pb-10 text-gray-200 uppercase text-lg tracking-widest">
				Our Perfect team
			</div>
			<div className="container flex flex-col justify-center p-4 mx-auto ">
				<div className="grid grid-cols-1 lg:grid-cols-4">
					{data?.map((member) => <Member key={member.id} member={member} />)}
				</div>
			</div>
		</section>
	);
};

export default Team;
