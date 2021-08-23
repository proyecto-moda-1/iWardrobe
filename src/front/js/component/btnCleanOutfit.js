import React, { Component, useState, useEffect, useContext } from "react";
import { getActions } from "../store/flux.js";
import { Context } from "../store/appContext";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PropTypes from "prop-types";

export const BtnCleanOutfit = props => {
	console.log(props);
	const { store, actions } = useContext(Context);
	const [checked, setChecked] = useState(false);
	const [clean, setClean] = useState({
		clean: {}
	});
	const handleClick = () => setChecked(!checked);

	// useEffect(() => {
	// 	actions.switchClean(data, id)
	// }, [checked])

	return (
		<>
			<Form.Check
				type="switch"
				id="custom-switch"
				label="Switch to clean"
				checked={checked}
				onClick={handleClick}
			/>
		</>
	);
};

export default BtnCleanOutfit;

BtnCleanOutfit.PropTypes = {
	name: PropTypes.string,
	clothing: PropTypes.array,
	image: PropTypes.string
};
//Esa prop que estamos seteando, la seteamos con el valor checked, es decir, la recibimos en false y con la funcion handleclock la vamos a cambiar a true (clean) en un useEffect cada vez que cambien checked (mirar Slack) que le tenemos que pasar el data y el id. Hay que meter como prop id, desde el key={index}
