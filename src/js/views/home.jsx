import React from "react";
import Characters from "../component/Characters.jsx"
import Planets from "../component/Planets.jsx"
import "../../styles/home.css";

export const Home = () => {
	return (
		<>	
			<div className="row">
				<Characters className=""/>
			</div>
			<div>
				<Planets />	
			</div>
		</>
		
	)
};
