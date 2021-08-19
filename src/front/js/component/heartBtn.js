import React, { Component, useState, useEffect, useContext } from "react";
import { getActions } from "../store/flux.js";
import { Context } from "../store/appContext";
import { Form } from "react-bootstrap";
import PropTypes from "prop-types";
import "../../styles/createOutfit.scss";

//this check goes inside the create btn which is a model called CreateOutfit

const HeartButton = props => {
	const { store, actions } = useContext(Context);

	return (
		<button
			type="button"
			className="btn-heart btn-outline-danger"
			onClick={() => actions.setFavorites(props.obj)}
			id="heartBtn">
			<i className="far fa-heart">
				<p>FAVOURITES</p>
			</i>
		</button>
	);
};
export default HeartButton;

HeartButton.propTypes = {
	obj: PropTypes.object
};
