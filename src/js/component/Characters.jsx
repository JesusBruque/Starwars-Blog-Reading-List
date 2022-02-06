import React, { useState, useEffect, useContext } from "react";
import { Card } from "../component/Card.jsx";

import { Context } from "../store/appContext.js";

import "../../styles/horizontalScroll.css";

const Characters = () => {

	useEffect(() => {
		actions.getCharacter();
	}, []);

	const { store, actions } = useContext(Context);


	return (
		<>
			<h1 className="text-danger">Characters</h1>
			<div className="container testimonial-group">
				<div className="row">
					{
						store.characters.map((character, index) => <Card key={index} name={character.name} id={character.uid} item={character} type="people"/>)
					}
				</div>
			</div>

		</>

	)
};

export default Characters;