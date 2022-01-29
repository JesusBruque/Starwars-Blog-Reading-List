import React, { useState, useEffect, useContext } from "react";
import Card from "../component/Card.jsx";
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
            <div>Characters</div>
			{
				store.characters.map((characters, index) => <Card key={index} name={characters.name} id={index}/>)
			}
        </>
        
    )
};

export default Characters;