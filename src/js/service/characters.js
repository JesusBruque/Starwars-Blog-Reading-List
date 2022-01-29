

export const getCharacters = () => {
	return fetch("https://www.swapi.tech/api/people");
};

export const getMoreInfo = (url) => {
	return fetch(url);
};
