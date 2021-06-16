import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "../../styles/card.scss";
//create your first component
export function Card(props) {
	useEffect(() => {
		fetch(props.url).then(response => response.json());
		// .then(data => console.log(data.result));
		// .catch(err => console.error(err));
	}, []);
	return (
		<div className="card">
			<img
				className="card-img"
				src="https://media.casa39.com/media/catalog/product/cache/19b6b5c45e217e8eff4f3a11c556942d/x/s/xsl10r4_1.jpg"
			/>
			<div className="card-body">
				<h5 className="card-title text-center">{props.name}</h5>
				{props.uid}
				<div className="btn-wrapper text-center d-flex justify-content-between">
					<a className="btn btn-outline-primary  btn-sm text-primary d-flex align-items-center">Larn more!</a>
					<a className="btn btn-outline-danger text-danger"> ♡</a>
				</div>
			</div>
		</div>
	);
}
Card.propTypes = {
	uid: PropTypes.string,
	name: PropTypes.string,
	url: PropTypes.string
};
