import React, { Component } from "react";

const Card = () => {
	return (
		<div className="card">
			<div className=""> Imagen</div>
			<div className="card-body">
				<h5 className="card-title">Card title</h5>
				<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

				<div className="d-flex justify-content-between">
					<button href="#" className="btn btn-outline-primary">Go somewhere</button>
					<button href="#" className="btn btn-warning">♡</button>
				</div>


			</div>
		</div>
	)

};

export default Card;
