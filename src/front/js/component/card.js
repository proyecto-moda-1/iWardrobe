import React, { useContext, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import "../../styles/card.scss";
//create your first component

export function Card(props) {
	return (
		<div className="card border-secondary mb-3">
			<div className="card-header">{props.collections}</div>
			<div className="card-body text-secondary">
				<h5 className="card-title">{props.name}</h5>
				<h5 className="card-title">{props.image}</h5>
				<p className="card-text">{props.clothingItems}</p>
			</div>
		</div>
	);
}

Card.propTypes = {
	collections: PropTypes.string,
	name: PropTypes.string,
	clothingItems: PropTypes.array,
	image: PropTypes.string
};
