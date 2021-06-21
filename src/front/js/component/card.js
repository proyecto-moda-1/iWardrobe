import React, { useContext, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import "../../styles/card.scss";
//create your first component

export function Card(props) {
	console.log({ props });
	let outfitCards = [];
	if (props.clothing != undefined) {
		outfitCards = props.clothing.map((outfit, index) => {
			return (
				<div key={index} className="card border-secondary mb-3">
					<div className="card-body text-secondary">
						<h5 className="card-title">{outfit.name}</h5>
						<h5 className="card-title">{outfit.image}</h5>
					</div>
				</div>
			);
		});
	}

	return (
		<div className="card border-secondary mb-3">
			<div className="card-header">{props.collections}</div>
			<div className="card-body text-secondary">
				<h5 className="card-title">{props.name}</h5>
				<h5 className="card-title">{props.image}</h5>
				<h5 className="card-title">{outfitCards}</h5>
				{/* <p className="card-text">{props.clothing}</p> */}
			</div>
		</div>
	);
}

Card.propTypes = {
	collections: PropTypes.string,
	name: PropTypes.string,
	clothing: PropTypes.array,
	image: PropTypes.string
};
