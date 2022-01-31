export const getCharacters = () => {
	return fetch("https://www.swapi.tech/api/characters");
};

export const getMoreInfoCharacters = (url) => {
	return fetch(url);
};
