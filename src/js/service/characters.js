const URL = "https://www.swapi.tech/api/people";

export const getCharacters = () => {
	return fetch(URL);
};