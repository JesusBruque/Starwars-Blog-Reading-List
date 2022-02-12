import React, { useState, useEffect, useContext } from "react";
import { Card } from "../component/Card.jsx";

import { Context } from "../store/appContext.js";

import "../../styles/horizontalScroll.css";

const Vehicles = () => {

	useEffect(() => {
		actions.getVehicle();
	}, []);

	const { store, actions } = useContext(Context);

	console.log(store)

	return (
		<>
			<h1 className="text-danger">Vehicles</h1>
			<div className="container testimonial-group">
				<div className="row">
					{
						store.vehicles.map((vehicles, index) => <Card key={index} name={vehicles.name} id={vehicles.uid} type="vehicles"/>)
					}
				</div>
			</div>

		</>

	)
};

export default Vehicles;