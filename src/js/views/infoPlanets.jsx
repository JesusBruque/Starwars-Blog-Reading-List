import React, {useContext, useEffect} from "react";
import { Context } from "../store/appContext.js";
import { useParams } from "react-router-dom";
import { getMoreInfoPlanets } from "../service/planets.js";

const InfoPlanets = () => {

    const params = useParams();

    const { store, actions } = useContext(Context);

    const moreInfoPlanets = () => {
		getMoreInfoPlanets(store.Planets[params.id].url)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
                actions.setInfoPlanets(data.result);
                console.log(store);
			})
			.catch((err) => {
				console.log(err);
			});
	};


    useEffect(() => {
        moreInfoPlanets();
	}, []);

    return (
        
        <>
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                    <img  className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-8 ">
                        <div className="card-body">
                        <h4 className="card-title">{}</h4>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                        </div> 
                    </div>
                </div>
                <div className="card-footer border-danger bg-white row text-danger">
                    <div className="col-sm-2">Name: </div>
                    <div className="col-sm-2">Birth Year: </div>
                    <div className="col-sm-2">Gender: </div>
                    <div className="col-sm-2">Height: </div>
                    <div className="col-sm-2">Skin Color: </div>
                    <div className="col-sm-2">Eye Color: </div>
                </div> 
            </div>
        </> 
    )
}

export default InfoPlanets;