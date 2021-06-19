import React, { useContext, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import "../../styles/card.scss";
//create your first component

export function Card(props) {
	const params = useParams();

	const { store, actions } = useContext(Context);

	const history = useHistory();

	useEffect(() => {
		actions.getAllOutfit();
	}, []);

	return (
		<div className="card">
			<Link to={`/outfit/1${props.imagen}`} className="text-dark text-decoration-none" />
			<div className="card-body">
				<h5 className="card-title text-center">{props.collections}</h5>
				{props.clothingItems}
				<div className="btn-wrapper text-center d-flex justify-content-between">
					<a className="btn btn-outline-primary  btn-sm text-primary d-flex align-items-center">
						{props.name}
					</a>
					<a className="btn btn-outline-danger text-danger"> ♡</a>
				</div>
			</div>
		</div>
	);
}

Card.propTypes = {
	collections: PropTypes.string,
	name: PropTypes.string,
	clothingItems: PropTypes.string,
	imagen: PropTypes.string
};
