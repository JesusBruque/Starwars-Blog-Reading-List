import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext.js";
import { useParams } from "react-router-dom";

const Info = () => {

    const {type,id} = useParams();
    const { store, actions } = useContext(Context);

    useEffect(() => {
		actions.getInfo(type,id);
	}, []);

    const printInfo = () => {
        if (type == "people"){
            return(
                <div className="card-footer border-danger bg-white row text-danger mt-2">
                    <div className="col-sm-2">Name: {store.info.name}</div>
                    <div className="col-sm-2">Birth Year: {store.info.birth_year}</div>
                    <div className="col-sm-2">Gender: {store.info.gender}</div>
                    <div className="col-sm-2">Height: {store.info.height} cm</div>
                    <div className="col-sm-2">Skin Color: {store.info.skin_color}</div>
                    <div className="col-sm-2">Eye Color: {store.info.eye_color}</div>
                </div>
            )
            
        } else if(type == "planets") {
            return(
                <div className="card-footer border-danger bg-white row text-danger mt-2">
                    <div className="col-sm-2">Name: {store.info.name}</div>
                    <div className="col-sm-2">Climate: {store.info.climate}</div>
                    <div className="col-sm-2">Diameter: {store.info.diameter} km</div>
                    <div className="col-sm-2">Orbital Period: {store.info.orbital_period} hours</div>
                    <div className="col-sm-2">Rotation Period: {store.info.rotation_period} hours</div>
                    <div className="col-sm-2">Terrain: {store.info.terrain}</div>
                </div>
            )
        } else{
            return(
                <div className="card-footer border-danger bg-white row text-danger mt-2">
                    <div className="col-sm-2">Name: {store.info.name}</div>
                    <div className="col-sm-2">Model: {store.info.model}</div>
                    <div className="col-sm-2">Cargo Capacity: {store.info.cargo_capacity}</div>
                    <div className="col-sm-2">Length: {store.info.length} m</div>
                    <div className="col-sm-2">Vehicle Class: {store.info.vehicle_class}</div>
                    <div className="col-sm-2">Manufacturer: {store.info.manufacturer}</div>
                </div>
            )
        }

    }

    return (
        <>
            <div className="card mb-3">
                <div className="row g-0 ">
                    <div className="col-md-4 p-auto">
                        <img
                            src=""
                            className="img-fluid rounded-start"
                            style={{ width: "300px", height: "400px" }}
                        />
                    </div>
                    <div className="col-md-8 m-auto p-auto justify-content-center row">
                        <div className="card-body col-3 mx-auto">
                            <h4 className="card-title text-center">{}</h4>
                            <p className="text-center">
                                There are many variations of passages of Lorem Ipsum available,
                                but the majority have suffered alteration in some form, by
                                injected humour, or randomised words which don't look even
                                slightly believable. If you are going to use a passage of Lorem
                                Ipsum, you need to be sure there isn't anything embarrassing
                                hidden in the middle of text.
                            </p>
                        </div>
                    </div>
                </div>
                {printInfo()}
            </div>
        </>
    );
};

export default Info;
