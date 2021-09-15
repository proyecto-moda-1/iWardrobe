import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { getActions } from "../store/flux.js";
import Select from "react-select";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "./card.js";

export const CollectionDropdown = () => {
	const { store, actions } = useContext(Context);
	let collections = [];
	useEffect(() => {
		actions.getCollections();
	}, []);

	if (store.collections != undefined) {
		collections = store.collections.map(collection => {
			return {
				label: collection.name,
				value: collection
			};
		});
	}
	const handleChange = option => {
		actions.selectCollection(option.value);
	};
	return (
		<div className="containerColleDropdown">
			<Select placeholder="Select Collection" onChange={handleChange} options={collections} />
		</div>
	);
};

export default CollectionDropdown;
