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
		<div className="Body">
			<div className="Jumbotrom">
				<div className="container">
					<img
						className="ProfileImg"
						src="https://i.pinimg.com/originals/e1/2c/9a/e12c9a6fae995ea792910a8dff4689e7.png"
						alt="imgFond"
					/>
					<h1 className="Tittle1">Welcome!</h1>
					<h3 className="text2">
						El estilo es una manera de decir quien eres sin tener que hablar. Por eso toma el tiempo
						necesario de crear el tuyo, con el que te sientas mejor.
					</h3>
				</div>
				<div className="container">
					<div className="row">
						<h1 className="textOufit"> OUTFITS DISPONIBLES</h1>
						<div className="favorite d-flex flex-row">{outfitCards}</div>
					</div>
					<div className="row">
						<h1 className="textDirty"> ROPA SUCIA</h1>
						<div className="dirty d-flex flex-row">{dirtyClothing}</div>
					</div>
				</div>
			</div>
		</div>
	);
};
