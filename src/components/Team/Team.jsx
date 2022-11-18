import React from 'react';
import Member from './Member';

const Team = () => {
	return (
		<section className="lg:px-24 py-10 bg-coal">
			<div className="font-normal px-4 pb-10 text-gray-200 uppercase text-lg tracking-widest">
				Our Perfect team
			</div>
			<div className="container flex flex-col justify-center p-4 mx-auto ">
				<div className="grid grid-cols-1 lg:grid-cols-4">
					<Member image="https://images.unsplash.com/photo-1617940888459-652785fbe67d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
					<Member image="https://images.unsplash.com/photo-1512813498716-3e640fed3f39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=424&q=80" />
					<Member image="https://images.unsplash.com/photo-1617940887943-9c7e9cc8e059?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80" />
					<Member image="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80" />
				</div>
			</div>
		</section>
	);
};

export default Team;
