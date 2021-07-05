import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Card } from "../component/card.js";
import { CollectionDropdown } from "../component/collectionDropdown.js";
import { getActions } from "../store/flux.js";

import PropTypes from "prop-types";

import "../../styles/profile.scss";

export const Closet = () => {
	const { store, actions } = useContext(Context);

	// useEffect(() => {
	// 	actions.getUserFavorite();
	// }, []);
	let favoriteCards = [];
	let outfitsByCategory = [];
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
				{/* <p className="lead">
					<a className="btn btn-primary btn-lg" href="#" role="button">
						Favorites
					</a>
					<a className="btn btn-primary btn-lg" href="#" role="button">
						Ropa Sucia
					</a>
				</p> */}
				<div className="row">
					<div className="col-xs-3">
						<h1 className="text"> COLLECTIONS</h1>
						<CollectionDropdown />
					</div>
					<div className="col-xs-9">
						<div className="planet d-flex flex-row">{outfitsByCategory}</div>
					</div>
				</div>
				<div className="row">
					<h1 className="text">FAVOURITES</h1>
					<div className="planet d-flex flex-row">{favoriteCards}</div>
				</div>
			</div>
		</div>
	);
};
