import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { getActions } from "../store/flux.js";
import PropTypes from "prop-types";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import "../../styles/showCollection.scss";

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
			{/* <h2> Add to my collections</h2>
			<br />
			<br /> */}
			<Form.Control
				size="sm"
				as="select"
				className_="select-collection"
				defaultValue={collection}
				onChange={event => {
					setCollection(event.target.value);
					setselectedCollections({
						...selectedCollections,
						collections: store.collections.find(item => item.id == event.target.value)
					});
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
