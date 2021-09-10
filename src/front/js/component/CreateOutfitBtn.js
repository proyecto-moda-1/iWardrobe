import React, { Component, useState, useEffect, useContext } from "react";
import Container from "react-bootstrap/Container";
import { getActions } from "../store/flux.js";
import { Context } from "../store/appContext";
import CreateOutfit from "./createOutfit.js";
import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../styles/CreateOutfitBtn.scss";
import PropTypes from "prop-types";

const CreateOutfitBtn = props => {
	const { store, actions } = useContext(Context);
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<Container>
				<Row>
					<Col sm={true}>
						<Button variant="outline-light" className="btnCreateMyOutfit" onClick={handleShow}>
							Create your outfit
						</Button>
						<CreateOutfit show={show} handleClose={handleClose} clothing={props.clothing} />
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default CreateOutfitBtn;

CreateOutfitBtn.propTypes = {
	clothing: PropTypes.object
};
