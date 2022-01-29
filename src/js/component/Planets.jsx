import React, { useState, useEffect, useContext } from "react";
import Card from "../component/Card.jsx";
import { getPlanets } from "../service/planets.js";
import { Context } from "../store/appContext.js";

const Planets = () => {

	const { store, actions } = useContext(Context);

    const [listPlanets, setListPlanets] = useState([])

    const getAllPlanets = () => {
		getPlanets()
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				actions.setPlanets(data.results);
				console.log(data);
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
            {
				store.planets.map((planets, index) => <Card key={index} name={planets.name} />)
			}
        </>
        
    )
};

export default Planets;