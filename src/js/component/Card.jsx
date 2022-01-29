import React, { useContext, useEffect } from "react";
import Proptypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

const Card = (props) => {

	const { store, actions } = useContext(Context);

	

	return (
		<div className="card">
			<div className=""> Imagen</div>
			<div className="card-body">
				<h5 className="card-title">{props.name}</h5>

				<div className="d-flex justify-content-between">
					<button className="btn btn-outline-primary">
						
						<Link to={"/info/"+props.id}>More Info</Link></button>
					<button href="#" className="btn btn-warning">♡</button>
				</div>


			</div>
			
		</div>
	)

};

Card.propTypes = {
	name: Proptypes.string,
	url: Proptypes.string,
}

export default Card;
