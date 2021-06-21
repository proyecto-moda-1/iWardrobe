import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { getActions } from "../store/flux.js";

// import PropTypes from "prop-types";

import "../../styles/profile.scss";

export const Closet = () => {
	// const { store, actions } = useContext(Context);

	// useEffect(() => {
	// 	actions.getAllOutfit();
	// }, []);
	<div className="container">
		<div className="jumbotron">
			<h1 className="display-4">Mi Closet!</h1>
			<p className="lead">Escoge tu outfit según tu día y tu evento…</p>
			<div className="my-4">
				<p className="lead">
					<a className="btn btn-primary btn-lg" href="#" role="button">
						Favorites
					</a>
					<a className="btn btn-primary btn-lg" href="#" role="button">
						Ropa Sucia
					</a>
					<a className="btn btn-primary btn-lg" href="#" role="button">
						{outfitCards}
						Category
					</a>
				</p>
			</div>
		</div>
	</div>;
};

// Card.propTypes = {
// 	collections: PropTypes.string,
// 	name: PropTypes.string,
// 	clothing: PropTypes.array,
// 	image: PropTypes.string
// };
