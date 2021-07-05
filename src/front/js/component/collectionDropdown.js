import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { getActions } from "../store/flux.js";
import Select from "react-select";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "../component/card.js";

export const CollectionDropdown = () => {
	const { store, actions } = useContext(Context);
	let collections = [];
	useEffect(() => {
		actions.getCollections();
	}, []);

	if (store.collections != undefined) {
		collections = store.collections.map(category => {
			return {
				label: category.name,
				value: category.id
			};
		});
	}

	return (
		<div className="container">
			<Select options={collections} />
			{/* <Card
				name={collections.name}
				collections={collections.collections}
				image={collections.image}
				clothing={collections.clothing}
				favorite={collections.favorite}
				key={index}
			/> */}
		</div>
	);
};

export default CollectionDropdown;
