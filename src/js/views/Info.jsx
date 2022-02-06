import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext.js";
import { useParams } from "react-router-dom";

const Info = () => {

    useEffect(() => {
		actions.getInfo((type,id));
	}, []);

    const {type,id} = useParams();
    const { store, actions } = useContext(Context);

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
                <div className="card-footer border-danger bg-white row text-danger mt-2">
                    <div className="col-sm-2">Name: {}</div>
                    <div className="col-sm-2">Birth Year: {}</div>
                    <div className="col-sm-2">Gender: {}</div>
                    <div className="col-sm-2">Height: {} cm</div>
                    <div className="col-sm-2">Skin Color: {}</div>
                    <div className="col-sm-2">Eye Color: {}</div>
                </div>
            </div>
        </>
    );
};

export default Info;
