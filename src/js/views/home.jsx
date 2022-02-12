import React from "react";
import Characters from "../component/Characters.jsx"
import Planets from "../component/Planets.jsx"
import Vehicles from "../component/Vehicles.jsx"
import "../../styles/home.css";

export const Home = () => {
	return (
		<>
			<Characters />
			<Planets />
			<Vehicles />
		</>

	)
};
