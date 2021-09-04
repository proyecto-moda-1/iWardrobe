import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import Card from "../component/card.js";
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
		store.selectedCollection.outfits.map(outfit => (
			<Card
				name={outfit.name}
				id={outfit.id}
				collections={outfit.collections}
				image={outfit.image}
				clothing={outfit.clothing}
				favorite={outfit.favorite}
				key={outfit.id}
			/>
		));
	if (store.favorites != undefined) {
		favoriteCards = store.favorites.map((favorite, index) => {
			return (
				<Card
					name={favorite.name}
					id={favorite.id}
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
			<h1 className="tittleCloset">Your Closet</h1>
			<p className="lead">Dress for every ocassion</p>
			<div className="my-4">
				<div className="row">
					<h1 className="favouritesText">- FAVOURITES</h1>
					<div className="planet d-flex flex-row">{favoriteCards}</div>
				</div>
				<div className="row">
					<div className="col-xs-3">
						<h1 className="collectionsText">- COLLECTIONS</h1>
						<div className="collectionDropdown">
							<CollectionDropdown />
						</div>
					</div>
				</div>
				<div className="row">
					<h1 className="text">{store.selectedCollection.name}</h1>
					<div className="planet d-flex flex-row">{collectionOutfits}</div>
				</div>
				<br />

				<div className="row">
					<h1 className="text">USADOS HOY</h1>
					<div className="planet d-flex flex-row"></div>
				</div>
			</div>
		</div>
	);
};
