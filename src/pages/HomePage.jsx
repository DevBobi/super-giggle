import React from 'react';
import About from '../components/About/About';
import Contact from '../components/Contact/Contact';
import Content from '../components/Content/Content';
import Footer from '../components/Footer/Footer';
import Gallery from '../components/Gallery/Gallery';
import Hero from '../components/Hero/Hero';
import Info from '../components/Info/Info';
import Nav from '../components/Nav/Nav';
import Pricing from '../components/Pricing/Pricing';
import Reviews from '../components/Reviews/Reviews';
import Team from '../components/Team/Team';

const Home = () => {
	return (
		<>
			<Hero />
			<Gallery />
			<Content />
			<About />
			<Pricing />
			<Reviews/>
			<Team />
			<Contact />
		</>
	);
};

export default Home;
