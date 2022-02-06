import { getCharacters, getInformation, getPlanets } from "../service/starWars.js";

let url = "https://www.swapi.tech/api/";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			planets: [],
			favourites: [],
			info: [],
			
		},
		actions: {
			getCharacter: () => {
				const store = getStore();
				if (store.characters.length === 0) {
					getCharacters()
						.then(response => {
							return response.json();
						})
						.then(json => {
							setStore({ characters: json.results });
						})
						.catch((err) => {
							console.log(err);
						});
				}
			},
			
			getPlanet: () => { 
				const store = getStore();
				if (store.planets.length === 0) {
					getPlanets()
						.then(response => {
							return response.json();
						})
						.then(json => {
							setStore({ planets: json.results });
						})
						.catch((err) => {
							console.log(err);
						});
				}
			},
			
			getInfo: (type, id) => {
				const store = getStore();
				console.log(`${url}${type}/${id}`);
				getInformation(`${url}${type}/${id}`)
				.then(res => {
					return res.json();
				})
				.then(data => {
					const {result}=data;
					setStore({ info: result.properties });
					console.log(store)
				})
				.catch((err) => {
					console.log(err);
				});
			
			},
		}
	};
};

export default getState;
