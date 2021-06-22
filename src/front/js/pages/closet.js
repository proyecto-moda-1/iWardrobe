import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Card } from "../component/card.js";
import { getActions } from "../store/flux.js";

import PropTypes from "prop-types";

import "../../styles/profile.scss";

export const Closet = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getUserFavorite();
	}, []);
	let favoriteCards = [];
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
			<div className="jumbotron">
				<h1 className="display-4">Mi Closet!</h1>
				<p className="lead">Escoge tu favorite según tu día y tu evento…</p>
				<div className="my-4">
					<p className="lead">
						<a className="btn btn-primary btn-lg" href="#" role="button">
							Favorites
						</a>
						<a className="btn btn-primary btn-lg" href="#" role="button">
							Ropa Sucia
						</a>
						<a className="btn btn-primary btn-lg" href="#" role="button">
							Category
						</a>
					</p>
					<div className="text">
						<h1 className="text"> favoriteS FAVORITOS</h1>
						<div className="planet d-flex flex-row">{favoriteCards}</div>
					</div>
				</div>
			</div>
		</div>
	);
};
