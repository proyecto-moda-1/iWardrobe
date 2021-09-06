import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import Card from "../component/card.js";
import { CollectionDropdown } from "../component/collectionDropdown.js";
import { getActions } from "../store/flux.js";

// import PropTypes from "prop-types";

import "../../styles/closet.scss";

export const Closet = () => {
	const { store, actions } = useContext(Context);

	function handleFavorite(id) {
		actions.favoriteBrand(id);
	}

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
					markAsFavorite={handleFavorite}
				/>
			);
		});
	}
	return (
		<div className="containerCloset">
			<h1 className="tittleCloset">Your Closet</h1>
			<p className="leadCloset">Dress for every ocassion</p>
			<div className="clothingUsed">
				<div className="row">
					<h1 className="todayCloset">-TODAYS OUTFIT</h1>
					<div className="planet d-flex flex-row"></div>
				</div>
			</div>
			<div className="containerClothingFavs">
				<div className="row">
					<h1 className="favouritesText">- FAVOURITES</h1>
					<div className="favClosetCard d-flex flex-row">{favoriteCards}</div>
				</div>
			</div>
			<div className="clothingCollections">
				<div className="row">
					<h1 className="collectionsText">- COLLECTIONS</h1>
					<div className="collectionDropdown">
						<CollectionDropdown />
					</div>
					<h1>{store.selectedCollection.name}</h1>
					<div className="collectionDrop">{collectionOutfits}</div>
				</div>
			</div>
		</div>
	);
};
