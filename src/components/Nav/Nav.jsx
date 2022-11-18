import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [changeHeader, setChangeHeader] = useState(false);
	//header change function
	const onChangeHeader = () => {
		if (window.scrollY >= 50) {
			setChangeHeader(true);
		} else {
			setChangeHeader(false);
		}
	};
	//change header by scrolling
	window.addEventListener("scroll", onChangeHeader);

	return (
		<div className={
			changeHeader
				?
				"w-full bg-slate-900 text-white body-font z-50 top-0 left-0  shadow-md transition duration-500 sticky"
				:
				"bg-opacity-50 w-full py-2 bg-coal text-white z-50 body-font shadow-md transition duration-500 fixed top-0"
		}>
			<header className='container px-12  mx-auto'>
				<div className="container mx-auto flex justify-between items-center py-3">
					{/* ::Site logo and Name */}
					<Link
						to="/"
						className="flex flex-shrink-0 title-font font-medium items-center text-gray-900 md:mb-0"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="w-12 h-12 text-white p-2 rounded-full"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
							/>
						</svg>
					</Link>

					{/* ::Navbar */}
					<nav className="hidden md:mr-auto uppercase md:ml-4 md:pl-4 md:border-l md:border-gray-500 md:flex flex-wrap items-center justify-center w-full text-sm font-normal tracking-wide">
						<Link to="/" className="mr-8 hover:text-gray-300">
							Home
						</Link>
						<Link
							to="/gallery"
							className="mr-8 hover:text-gray-300"
						>
							Galleries
						</Link>
						<Link
							to="/packages"
							className="mr-8 hover:text-gray-300"
						>
							Packages
						</Link>
						<Link to="/team" className="mr-8 hover:text-gray-300">
							Team
						</Link>
						<Link
							to="/contact"
							className="mr-8 hover:text-gray-300"
						>
							Contact
						</Link>
					</nav>
					{/* ::Burger icon standard */}
					<button
						className="md:hidden rounded-md active:outline-none focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500"
						onClick={() => setIsOpen(!isOpen)}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-8 w-8 rounded-md text-gray-300 bg-gradient-to-br from-transparent to-transparent hover:text-white hover:from-yellow-500 hover:to-red-500"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M4 6h16M4 12h16M4 18h16"
							/>
						</svg>
					</button>
				</div>
			</header>

			{/* :MOBILE MENU */}
			{isOpen && (
				<div className="w-full flex flex-col py-4 px-3 md:hidden bg-gray-800 text-base uppercase text-center font-semibold">
					<a
						href="#link"
						className="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700"
					>
						Solutions
					</a>
					<a
						href="#link"
						className="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700"
					>
						Prices
					</a>
					<a
						href="#link"
						className="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700"
					>
						About
					</a>
					<a
						href="#link"
						className="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700"
					>
						Contact
					</a>
				</div>
			)}
		</div>
	)
}

export default Nav
