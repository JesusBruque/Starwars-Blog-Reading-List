import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext.js";
import { useParams } from "react-router-dom";
import { getMoreInfoCharacters } from "../service/characters.js";
import { getMoreInfoPlanets } from "../service/planets.js";

const Info = () => {
    console.log(window.location.search);
    const urlQueryString = new URLSearchParams(window.location.search);
    const id = urlQueryString.get("id");
    const name = urlQueryString.get("name");
    console.log(id, name);

    const { store, actions } = useContext(Context);

    const moreInfoCharacters = () => {
        getMoreInfoCharacters(store.characters[params.id].url)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                actions.setInfoCharacters(data.result.properties);
                console.log(store);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    /* const moreInfoPlanets = () => {
          getMoreInfoPlanets(store.Planets[params.id].url)
              .then((res) => {
                  return res.json();
              })
              .then((data) => {
                  actions.setInfoPlanets(data.result.properties);
                  console.log(store);
              })
              .catch((err) => {
                  console.log(err);
              });
    }; */

    useEffect(() => {
        moreInfoCharacters();
        /* moreInfoPlanets(); */
    }, []);

    return (
        <>
            <div className="card mb-3">
                <div className="row g-0 ">
                    <div className="col-md-4 p-auto">
                        <img
                            src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
                            className="img-fluid rounded-start"
                            style={{ width: "300px", height: "400px" }}
                        />
                    </div>
                    <div className="col-md-8 m-auto p-auto justify-content-center row">
                        <div className="card-body col-3 mx-auto">
                            <h4 className="card-title text-center">{store.info.name}</h4>
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
                <div className="card-footer border-danger bg-white row text-danger mt-2">
                    <div className="col-sm-2">Name: {store.info.name}</div>
                    <div className="col-sm-2">Birth Year: {store.info.birth_year}</div>
                    <div className="col-sm-2">Gender: {store.info.gender}</div>
                    <div className="col-sm-2">Height: {store.info.height} cm</div>
                    <div className="col-sm-2">Skin Color: {store.info.skin_color}</div>
                    <div className="col-sm-2">Eye Color: {store.info.eye_color}</div>
                </div>
            </div>
        </>
    );
};

export default Info;
