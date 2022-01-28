import React, { Component } from "react";
import Proptypes from "prop-types";

const Card = (props) => {
	return (
		<div className="card">
			<div className=""> Imagen</div>
			<div className="card-body">
				<h5 className="card-title">Card title</h5>
				<p className="card-text"></p>

				<div className="d-flex justify-content-between">
					<button href="#" className="btn btn-outline-primary">Go somewhere</button>
					<button href="#" className="btn btn-warning">♡</button>
				</div>


			</div>
		</div>
	)

};

Card.propTypes = {
	data: Proptypes.object,
}

export default Card;
