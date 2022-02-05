import { getCharacters, getInfoCharacter, getPlanets } from "../service/starWars.js";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			planets: [],
			favourites: [],
			
		},
		actions: {
			getCharacter() {
				const store = getStore();
				if (store.characters.length === 0) {
					getCharacters()
						.then(response => {
							return response.json();
						})
						.then(json => {
							setStore({ characters: json.results });
						});
				}
			},
			
			getPlanet() {
				const store = getStore();
				if (store.planets.length === 0) {
					getPlanets()
						.then(response => {
							return response.json();
						})
						.then(json => {
							setStore({ planets: json.results });
							console.log(store)
						});
				}
			},

			getInfoCha() {
				const store = getStore();
				if (store.planets.length === 0) {
					getInfoCharacter()
						.then(response => {
							return response.json();
						})
						.then(json => {
							setStore({ planets: json });
							console.log(store)
						});
				}
			},

			addFavourites: (favourites) => {
				const store = getStore();
				setStore({...store, favourites: [...store.favourites, favourites]})
				console.log(store);
			}
		}
	};
};

export default getState;
