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
	const [dirty, setDirty] = useState(props.dirty);
	const handleClick = () => {
		console.log(props.id, props);
		actions.swicthDirty(props.id);
		setDirty(!dirty);
	};

	return (
		<input type="checkbox" id="custom-switch" label="Switchclean" checked={dirty} onChange={() => handleClick()} />
	);
};

export default BtnCleanOutfit;

BtnCleanOutfit.propTypes = {
	id: PropTypes.number,
	dirty: PropTypes.bool
};
