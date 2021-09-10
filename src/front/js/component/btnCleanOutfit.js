import React, { Component, useState, useEffect, useContext } from "react";
import { getActions } from "../store/flux.js";
import { Context } from "../store/appContext";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PropTypes from "prop-types";
import { FormCheck } from "react-bootstrap";

export const BtnCleanOutfit = props => {
	const { store, actions } = useContext(Context);
	const [checked, setChecked] = useState(false);
	const handleClick = () => {
		actions.swicthDirty(props.id);
		setChecked(!checked);
	};

	return (
		<>
			<Form.Check
				type="switch"
				id="custom-switch"
				label="Switch to clean"
				checked={checked}
				onChange={() => handleClick()}
			/>
		</>
	);
};

export default BtnCleanOutfit;

BtnCleanOutfit.propTypes = {
	id: PropTypes.int
};
