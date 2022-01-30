import React, { useState, useEffect, useContext } from "react";
import { Card } from "../component/Card.jsx";
import { getCharacters } from "../service/characters.js";
import { Context } from "../store/appContext.js";

const Characters = () => {

	const { store, actions } = useContext(Context);

	const getAllCharacters = () => {
		getCharacters()
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				actions.setCharacters(data.results);
				console.log(data.results);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	useEffect(() => {
		getAllCharacters();
	}, []);

	return (
		<>
			<h1 className="text-danger">Characters</h1>
			<div className="container testimonial-group">
				<div className="row">
					{
						store.characters.map((characters, index) => <Card key={index} name={characters.name} id={index} />)
					}
				</div>
			</div>

		</>

	)
};

export default Characters;