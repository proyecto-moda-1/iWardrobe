import React, { Component, useState, useEffect, useContext } from "react";
import { getActions } from "../store/flux.js";
import { Context } from "../store/appContext";
import { Form } from "react-bootstrap";

export const SelectOutfitBtn = props => {
	const { store, actions } = useContext(Context);

	const [checked, setChecked] = useState(false);

	const handleChange = event => {
		setChecked(event.target.checked);
	};

	useEffect(() => {
		actions.getUserFavorite(data);
	}, []);

	return (
		<>
			<Form.Group className="mb-3" controlId="formBasicCheckbox">
				<Form.Check type="checkbox" label="This outfit" checked={checked} onChange={handleChange} />
			</Form.Group>
		</>
	);
};

export default SelectOutfitBtn;
