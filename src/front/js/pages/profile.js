import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Card } from "../component/card.js";
import { getActions } from "../store/flux.js";

import PropTypes from "prop-types";

import "../../styles/profile.scss";

export const Profile = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getAllOutfit();
	}, []);

	let outfitCards = [];
	let dirtyClothing = [];
	if (store.outfits != undefined) {
		dirtyClothing = store.outfits.filter(outfit => outfit.clothing.some(clo => !clo.clean)).map((outfit, index) => {
			return (
				<Card
					name={outfit.name}
					collections={outfit.collections}
					image={outfit.image}
					clothing={outfit.clothing}
					favorite={outfit.favorite}
					key={index}
				/>
			);
		});
		outfitCards = store.outfits.filter(outfit => outfit.clothing.every(clo => clo.clean)).map((outfit, index) => {
			return (
				<Card
					name={outfit.name}
					collections={outfit.collections}
					image={outfit.image}
					clothing={outfit.clothing}
					favorite={outfit.favorite}
					key={index}
				/>
			);
		});
	}

	return (
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
			<div className="text">
				<h1 className="text"> OUTFITS DISPONIBLES</h1>
				<div className="planet d-flex flex-row">{outfitCards}</div>
			</div>
			<div className="text">
				<h1 className="text"> ROPA SUCIA</h1>
				<div className="planet d-flex flex-row">{dirtyClothing}</div>
			</div>
		</div>
	);
};
