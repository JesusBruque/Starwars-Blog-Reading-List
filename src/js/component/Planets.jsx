import React, { useState, useEffect, useContext } from "react";
import {Card} from "../component/Card.jsx";

import { Context } from "../store/appContext.js";

import "../../styles/horizontalScroll.css";

const Planets = () => {

	useEffect(() => {
		actions.getPlanet();
	}, []);

	const { store, actions } = useContext(Context);

    return (
        <>
            <h1 className="text-danger">Planets</h1>
			<div className="container testimonial-group">
				<div className="row p-3">
					{
					store.planets.map((planet, id) => <Card key={id} name={planet.name} id={planet.uid} type="planets"/>)
					}
				</div>
			</div>
        </>
        
    )
};

export default Planets;