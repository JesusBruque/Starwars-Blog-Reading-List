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
        <div>
            {
                <>
                    <div>More Info</div>
                    {
                        store.currentInfo.map((info, id) => <div key={id}>{info}</div>)
                    }
                    
                </> 
             }

            
               
               
            
        </div>
    )

}

export default Info;