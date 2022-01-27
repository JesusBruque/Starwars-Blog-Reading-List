import React, { useState, useEffect } from "react";
import Card from "../component/Card.jsx";
import { getPlanets } from "../service/planets.js";

const Planets = () => {

    const [listPlanets, setListPlanets] = useState([])

    const getAllPlanets = () => {
		getPlanets()
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				actions.setPlanets(data.results);
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
            <div>Planets</div>
            <Card/>
        </>
        
    )
};

export default Planets;