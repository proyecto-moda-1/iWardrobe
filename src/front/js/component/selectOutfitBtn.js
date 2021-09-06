import React, { Component, useState, useEffect, useContext } from "react";
import { getActions } from "../store/flux.js";
import { Context } from "../store/appContext";
import { Form } from "react-bootstrap";
import "../../styles/createOutfit.scss";
import PropTypes from "prop-types";

const SelectOutfitBtn = props => {
	const { store, actions } = useContext(Context);
	const [checked, setChecked] = useState(props.today);
	// const [outfit, setOutfit] = useState({
	// 	selectedOutfits: {}
	// });
	const handleClick = () => {
		actions.todaysOutfit(props.id);
		setChecked(!checked);
	};
	// if{nombre de la variable ==== true}

	return (
		<>
			<Form.Group id="outfitCheck">
				<Form.Check
					type="checkbox"
					label="Use today"
					checked={checked}
					// onClick={() => actions.setSelectedOutfit()}
					onChange={handleClick}
				/>
			</Form.Group>
		</>
	);
};

export default SelectOutfitBtn;

SelectOutfitBtn.propTypes = {
	id: PropTypes.int,
	today: PropTypes.bool
};
