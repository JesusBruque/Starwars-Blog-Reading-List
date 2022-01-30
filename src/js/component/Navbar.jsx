import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import {Favourites} from "./Favourites.jsx";
import { Context } from "../store/appContext";

import StarWars from "../../img/starwars.png";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light bg-light mb-3 px-4">
			<Link to="/">
				<img src={StarWars}/>
			</Link>
			<div className="ml-auto">
				<Favourites />
			</div>
		</nav>
	);
};
