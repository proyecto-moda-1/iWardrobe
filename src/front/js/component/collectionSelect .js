import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { getActions } from "../store/flux.js";
import PropTypes from "prop-types";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import "../../styles/createOutfit.scss";

export const CollectionSelect = props => {
	const { store, actions } = useContext(Context);
	const [collection, setCollection] = useState({});
	const [selectedCollections, setselectedCollections] = useState({
		collections: {}
	});
	const allCollections = store.collections.map(item => {
		return (
			<option key={item.id} value={item.id}>
				{item.name}
			</option>
		);
	});

	useEffect(() => {
		actions.getCollections();
	}, []);

	return (
		<>
			<Form.Control
				className="SelectorCollection"
				size="sm"
				as="select"
				// id="selectCollection"
				defaultValue={collection}
				onChange={event => {
					setCollection(event.target.value);
					setselectedCollections({
						...selectedCollections,
						collections: store.collections.find(item => item.id == event.target.value)
					});
					actions.collection_id(parseInt(event.target.value));
				}}>
				<option selected value="0">
					My collections
				</option>
				{allCollections}
			</Form.Control>
		</>
	);
};

export default CollectionSelect;
