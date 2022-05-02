import React, { useContext } from "react";
import Proptypes from "prop-types";
import { Link } from "react-router-dom";
import "../../styles/card.css";
import { Context } from "../store/appContext.js";

export const Card = (props) => {

	const { store, actions } = useContext(Context);    

	const handleLike = (e) => {
        // if ( store.favorites(f => f.name === e.target.value) ) {
        //     actions.deleteFavorites(e.target.value);}
        // else { 
		actions.addFavorites(e.target.value, e.target.id) 
    }

	return (
		<div className="card col-3 d-inline-block m-3 p-auto" style={{ width: "300px", height: "450px" }}>
			<div className="m-auto p-auto">
				<img src="" className="card-img-top mx-auto d-block my-2" style={{ width: "230px", height: "300px" }} />
			</div>
			<div className="card-body mb-2">
				<h5 className="card-title">{props.name}</h5>
				<div className="d-flex justify-content-between">
					<button className="btn btn-outline-primary btn-outline-primary:hover btn-outline-primary:active btn-outline-primary:visited">
						<Link id="a" to={`/info/${props.type}/${props.id}`}>Learn more!</Link>
					</button>
					<button onClick={handleLike} title={props.type} id={props.id} value={props.name} className="btn btn-outline-warning btn-outline-warning:hover btn-outline-warning:active btn-outline-warning:visited">♡</button>
				</div>
			</div>
		</div>
	)
};

Card.propTypes = {
	type: Proptypes.string,
	name: Proptypes.string,
	id: Proptypes.string
}
