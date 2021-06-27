import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { getActions } from "../store/flux.js";
import PropTypes from "prop-types";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import "../../styles/home.scss";

export const CollectionSelect = props => {
	const { store, actions } = useContext(Context);
	let collections = [];
	// useEffect(() => {
	// 	actions.getCollections();
	// }, []);
	if (store.collections != undefined) {
		collections = store.collections.map(category => {
			return {
				label: category.name,
				value: category.id
			};
		});
	}

	return (
		<>
			<Container>
				<Row>
					<Col sm={true}>
						<h2> Add to my collections</h2>
						<Form.Control size="sm" as="select" className="select-clothing" defaultValue={top}>
							<option selected value="0">
								My collections
							</option>
							{collections}
						</Form.Control>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default CollectionSelect;
