import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { getActions } from "../store/flux.js";
import Select from "react-select";
import "bootstrap/dist/css/bootstrap.min.css";

export const CollectionDropdown = () => {
	const { store, actions } = useContext(Context);
	let categories = [];
	useEffect(() => {
		actions.getCollections();
	}, []);

	if (store.categories != undefined) {
		categories = store.categories.map(category => {
			return {
				label: category.name,
				value: category.id
			};
		});
	}
	return (
		<div className="container">
			<Select options={categories} />
		</div>
	);
};

export default CollectionDropdown;
