import React, { useState, useEffect, useContext } from "react";
import {Card} from "../component/Card.jsx";
import { getPlanets } from "../service/planets.js";
import { Context } from "../store/appContext.js";
import "../../styles/planets.css";

const Planets = () => {

	const { store, actions } = useContext(Context);

    const getAllPlanets = () => {
		getPlanets()
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				actions.setPlanets(data.results);
				console.log(data.results);
			})
			.catch((err) => {
				console.log(err);
			});
	};



	useEffect(() => {
		getAllPlanets();
	}, []);

    return (
        <>
            <h1 className="text-danger">Planets</h1>
			<div className="container testimonial-group">
				<div className="row p-3">
					{
					store.planets.map((planets, index) => <Card key={index} name={planets.name} />)
					}
				</div>
			</div>
        </>
        
    )
};

export default Planets;