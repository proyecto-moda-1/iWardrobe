import React, { Component, useState, useEffect, useContext } from "react";
import { getActions } from "../store/flux.js";
import { Context } from "../store/appContext";
import { Form } from "react-bootstrap";
import "../../styles/createOutfit.scss";

const SelectOutfitBtn = props => {
	const { store, actions } = useContext(Context);
	const [checked, setChecked] = useState(false);
	const [outfit, setOutfit] = useState({
		selectedOutfits: {}
	});
	const handleClick = () => setChecked(!checked);
	// if{nombre de la variable ==== true}

	// useEffect(() => {
	// 	actions.selectOutfit(data, id);
	// }, [checked]);

	return (
		<>
			<Form.Group id="outfitCheck">
				<Form.Check type="checkbox" label="This outfit" checked={checked} onClick={handleClick} />
			</Form.Group>
		</>
	);
};

export default SelectOutfitBtn;

// SelectOutfitBtn.PropTypes = {
// 	name: PropTypes.string,
// 	clothing: PropTypes.array,
// 	image: PropTypes.string
// };
