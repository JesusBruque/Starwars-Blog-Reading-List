const URL = "https://www.swapi.tech/api"

export const getCharacters = () => {
	const url = URL + "/people"
	return fetch(url);
};

export const getPlanets = () => {
	const url = URL + "/planets"
	return fetch(url);
};

export const getInformation = (url) => {
	return fetch(url)
};