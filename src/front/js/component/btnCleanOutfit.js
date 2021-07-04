import React, { Component, useState, useEffect, useContext } from "react";
import { getActions } from "../store/flux.js";
import { Context } from "../store/appContext";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


export const BtnCleanOutfit = props => {
	const { store, actions } = useContext(Context);
	const [checked, setChecked] = useState(false);

	const handleChange = event => {
		setChecked(event.target.checked);
	};

	// useEffect(() => {
	// 	actions.getClothing("top");
	// }, []);

	return (
		<>
			<Form.Check
				type="switch"
				id="custom-switch"
				label="Switch to clean"
				checked={checked}
				onChange={handleChange}
			/>
		</>
	);
};

export default BtnCleanOutfit;
