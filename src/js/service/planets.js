export const getPlanets = () => {
	return fetch("https://www.swapi.tech/api/planets");
};

export const getMoreInfoPlanets = (url) => {
	return fetch(url);
};