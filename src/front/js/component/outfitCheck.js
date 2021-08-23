import React, { Component, useState, useEffect, useContext } from "react";
import { getActions } from "../store/flux.js";
import { Context } from "../store/appContext";
import { Form } from "react-bootstrap";
import "../../styles/createOutfit.scss";

const SelectOutfitBtn = props => {
	const { store, actions } = useContext(Context);
	const [checked, setChecked] = useState(false);
	const handleClick = () => setChecked(!checked);


	

	// useEffect(() => {
	// 	actions.selectOutfit(data);
	// }, []);

	return (
		<>
			<Form.Group id="outfitCheck">
				<Form.Check type="checkbox" label="This outfit" checked={checked} onClick={handleClick}
 />
			</Form.Group>
		</>
	);
};

export default SelectOutfitBtn;
