import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Card } from "../component/card.js";
import { CollectionDropdown } from "../component/collectionDropdown.js";
import { getActions } from "../store/flux.js";

// import PropTypes from "prop-types";

import "../../styles/closet.scss";

export const Closet = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getUserFavorite();
	}, []);
	let favoriteCards = [];
	const collectionOutfits =
		store.selectedCollection.outfits &&
		store.selectedCollection.outfits.map(outfit => <div key={outfit.id}>{outfit.name}</div>);
	if (store.favorites != undefined) {
		favoriteCards = store.favorites.map((favorite, index) => {
			return (
				<Card
					name={favorite.name}
					collections={favorite.collections}
					image={favorite.image}
					clothing={favorite.clothing}
					favorite={favorite.favorite}
					key={index}
				/>
			);
		});
	}
	return (
		<div className="container">
			<h1 className="display-4">Your closet</h1>
			<p className="lead">Dress for every ocassion</p>
			<div className="my-4">
				<div className="row">
					<div className="col-xs-3">
						<h1 className="text"> COLLECTIONS</h1>
						<CollectionDropdown />
					</div>
				</div>
				<div className="row">
					<h1 className="text">FAVOURITES</h1>
					<div className="planet d-flex flex-row">{favoriteCards}</div>
				</div>
				<div className="row">
					<h1 className="text">{store.selectedCollection.name}</h1>
					<div className="planet d-flex flex-row">{collectionOutfits}</div>
				</div>
			</div>
		</div>
	);
};
