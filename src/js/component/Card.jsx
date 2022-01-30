import React, { useContext, useState } from "react";
import Proptypes from "prop-types";
import { Link } from "react-router-dom";
import "../../styles/card.css";
import { Context } from "../store/appContext";

export const Card = (props) => {

	const { store, actions } = useContext(Context);
	const { favourites, setFavourites } = useState("");

	return (
		<div className="card col-3 d-inline-block m-3 p-auto" style={{ width: "300px", height: "450px" }}>
			<div className="m-auto p-auto">
				<img src={`https://starwars-visualguide.com/assets/img/characters/${props.id + 1}.jpg`} className="card-img-top mx-auto d-block my-2" style={{ width: "230px", height: "300px" }} />
			</div>
			<div className="card-body mb-2">
				<h5 className="card-title">{props.name}</h5>
				<div className="d-flex justify-content-between">
					<button className="btn btn-outline-primary btn-outline-primary:hover btn-outline-primary:active btn-outline-primary:visited">
						<Link id="a" to={`/info?id=${props.id}&name=${props.name}`}>Learn more!</Link>
					</button>
					<button className="btn btn-outline-warning btn-outline-warning:hover btn-outline-warning:active btn-outline-warning:visited"><svg id="heart" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart text-warning" viewBox="0 0 16 16">
						<path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
					</svg></button>
				</div>
			</div>
		</div>
	)
};

Card.propTypes = {
	name: Proptypes.string,
	id: Proptypes.number,
	type: Proptypes.object
}
