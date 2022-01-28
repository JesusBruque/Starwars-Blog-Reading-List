const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			planets: [],
			
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
		}
	};
};

export default getState;
