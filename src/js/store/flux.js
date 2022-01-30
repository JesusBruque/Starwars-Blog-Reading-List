const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			planets: [],
			info: [],
			favourites: [],
			
		},
		actions: {

			setCharacters: (data) => {
				const store = getStore();
				setStore({...store, characters: data});
			},

			setPlanets: (data) => {
				const store = getStore();
				setStore({...store, planets: data});
			},

			setInfoCharacters: (data) => {
				const store = getStore();
				setStore({...store, info: data});
			},
			
			setInfoPlanets: (data) => {
				const store = getStore();
				setStore({...store, info: data});
			},

			/* addFavourites: (like) => {
				const store = getStore();
				setStore({...store, favourites: [...store.favourites, like]})
				console.log(store);
			} */
		}
	};
};

export default getState;
