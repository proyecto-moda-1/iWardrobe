import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Card } from "react-bootstrap";
import { getActions } from "../store/flux.js";

import PropTypes from "prop-types";

import "../../styles/profile.scss";

export const Profile = () => {
	// const params = useParams();

	// const { store, actions } = useContext(Context);

	// useEffect(() => {
	//     actions.getAllOutfit();
	// }, []);
	// let

	return (
		// <Card
		//     name={name}
		//     collections={collections}
		//     clothingItems={collectionsItems}
		// />

		<div className="container-fluid">
			<div className="row justify-content-md-center">
				<div className="col rounded float-star">
					<img
						src="https://image.freepik.com/vector-gratis/mujer-joven-ordenador-portatil-escritorio-trabajando-linea-ilustracion_24877-69119.jpg"
						className="rounded float-start"
						alt=""
					/>
				</div>
				<div className="col">
					<p className="col-md-auto">
						MODA Es lo que compras. ESTILO es lo que haces con eso. No lo dejes para ultima hora.
					</p>
				</div>
			</div>
		</div>
	);
};
