import React from "react";
import { Link } from "react-router-dom";

import StarWars from "../../img/starwars.png";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<img src={StarWars}/>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Favourites</button>
				</Link>
			</div>
		</nav>
	);
};
