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
	// if (store.profile.length == 0) {
	outfitCards = store.profile.map((outfit, index) => {
		return (
			<Card
				name={outfit.name}
				collections={outfit.collections}
				clothingItems={outfit.clothingItems}
				key={index}
			/>
		);
	});
	return (
		<div className="home">
			<h1 className="text-warning"> Characters</h1>
			<div className="planet d-flex flex-row">{outfitCards}</div>
		</div>
	);
};
