import React, {useContext, useEffect} from "react";
import { Context } from "../store/appContext.js";
import { useParams } from "react-router-dom";
import { getMoreInfo } from "../service/characters.js";


const Info = () => {

    const params = useParams();

    const { store, actions } = useContext(Context);

    const moreInfo = () => {
		getMoreInfo(store.characters[params.id].url)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
                actions.setCurrentInfo(data);
				console.log(data);
			})
			.catch((err) => {
				console.log(err);
			});
	};

    useEffect(() => {
		moreInfo();
	}, []);

    return (
        
            <>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Title</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="card-link">Card link</a>
                        <a href="#" className="card-link">Another link</a>
                    </div>
                </div>
            </> 
    )

}

export default Info;