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
		dirtyClothing = store.outfits
			.filter(outfit => outfit.clothing.some(clo => !clo.clean))
			.map((outfit, index) => {
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
		outfitCards = store.outfits
			.filter(outfit => outfit.clothing.every(clo => clo.clean))
			.map((outfit, index) => {
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
			<div className="jumbotron text-justify bg-cover">
				{/* <img
					className="imgProf"
					src="https://image.freepik.com/foto-gratis/concepto-negocio-tecnologia-comunicacion-espacio-trabajo-minimalista-computadora-portatil-moderna-pantalla-blanca-blanco_273609-1702.jpg"
					alt=""
				/> */}
				<div className="container">
					<h1 className="text2">Ten la libertad de usar lo que te haga sentir UNICA.</h1>
				</div>
			</div>
			<div className="row">
				<div className="containerDisponible">
					<h1 className="textOufit"> OUTFITS DISPONIBLES</h1>
					<div className="planet d-flex flex-row">{outfitCards}</div>
				</div>
			</div>
			<div className="row">
				<div className="containerDirty">
					<h1 className="textDirty"> ROPA SUCIA</h1>
					<div className="planet d-flex flex-row">{dirtyClothing}</div>
				</div>
			</div>
		</div>
	);
};
