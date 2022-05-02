import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const Favourites = () => {

    const {store, actions} = useContext(Context);
    console.log(store.favorites)
    
    return (
        <>
            <div className="btn-group dropstart">
                <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    Favourites
                </button>
                <ul className="dropdown-menu" >
                    {
                        store.favorites.map((favourites, index) => <li onClick={() =>  actions.deleteFavorites(favourites.name)} className="dropdown-item" key={index}>{favourites.type}</li>)
                    }
                </ul>
            </div>
        </>
    )
}