import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const Favourites = () => {

    const {store, actions} = useContext(Context);
    
    return (
        <>
            <div className="btn-group">
                <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    Favourites
                </button>
                <ul className="dropdown-menu">
                    {
                        store.favourites.map((favourites, index) => <li className="dropdown-item" key={index} favourites={favourites}/>)
                    }
                </ul>
            </div>
        </>
    )
}