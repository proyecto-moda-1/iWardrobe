import React, { Component, useState, useEffect, useContext } from "react";
import { getActions } from "../store/flux.js";
import { Context } from "../store/appContext";
import Form from "react-bootstrap/Form";
// queremo hacer un cehckbox asi que debemos primero buscar como hacer el checkbox y desoues coger y meterle la lógoca, sera un ochnage con un usestate y un useeffect

export const BtnCleanOutfit = props => {
	const { store, actions } = useContext(Context);
	const [checked, setChecked] = useState(false);

	const handleChange = event => {
		setChecked(event.target.checked);
	};

	// useEffect(() => {
	// 	actions.getClothing("top");
	// 	actions.getClothing("bottom");
	// 	actions.getClothing("footwear");
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
