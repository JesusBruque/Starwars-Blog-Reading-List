import { getCharacters, getVehicles, getPlanets, getInformation} from "../service/starWars.js";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			planets: [],
			vehicles: [],
			favorites: [],
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
						.then(res => {
							return res.json();
						})
						.then(json => {
							setStore({ planets: json.results });
						})
						.catch((err) => {
							console.log(err);
						});
				}
			},

			getVehicle: () => { 
				const store = getStore();
				if (store.vehicles.length === 0) {
					getVehicles()
						.then(res => {
							return res.json();
						})
						.then(json => {
							setStore({ vehicles: json.results });
						})
						.catch((err) => {
							console.log(err);
						});
				}
			},
			
			getInfo: (type, id) => {
				const store = getStore();
				console.log(type, id);
				getInformation(type, id)
				
				.then(res => {
					return res.json();
				})
				.then(data => {
					const {result}=data;
					console.log(data)
					setStore({ info: result.properties });
					console.log(store)
				})
				.catch((err) => {
					console.log(err);
				});
			
			},

			addFavorites: (type, id) => {
				const store = getStore();
				let data = {};
				data.id = id;
				data.type = type;
				if (type === "character") {
					data.name = store.characters[id-1].name;
					data.url = `/${type}/${id}`;
				} else if (type === "planet"){
					data.name = store.planets[id-1].name;
					data.url = `/${type}/${id}`;
				} 
				setStore({...store, favorites: [...store.favorites, data]});
			},

			deleteFavorites: (name) => {
				const store = getStore();
				const data = store.favorites.filter((f) => (f.name !== name));
				setStore({...store, favorites: data});
			}
		}
	};
};

export default getState;
