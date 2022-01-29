const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			planets: [],
			currentInfo: [],
			
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

			setCurrentInfo: (data) => {
				const store = getStore();
				setStore({...store, currentInfo: data});
				console.log(store);
			}
		}
	};
	
};

export default getState;
