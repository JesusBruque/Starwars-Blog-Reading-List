export const getCharacters = () => {
	return fetch("https://www.swapi.tech/api/people");
};

export const getMoreInfoCharacters = (url) => {
	return fetch(url);
};
