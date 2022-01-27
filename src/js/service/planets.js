const URL = "https://www.swapi.tech/api/planets";

export const getPlanets = () => {
	return fetch(URL);
};