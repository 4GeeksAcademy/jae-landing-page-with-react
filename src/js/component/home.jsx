import React from "react";

import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Card from "./Card.jsx";
import Footer from "./Footer.jsx";


//create your first component
const Home = () => {
	return (
		<div className="Container">
			<Navbar />
			<Jumbotron />
			<Card />
			<Footer />
		
		</div>
	);
};

export default Home;
