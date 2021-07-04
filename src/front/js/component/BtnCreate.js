import React, { Component, useState, useEffect, useContext } from "react";
import { getActions } from "../store/flux.js";
import { Context } from "../store/appContext";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CreateOutfit from "../component/CreateOutfit.js";
import { Form } from "react-bootstrap";

export const CreateOutfitBtn = props => {
	const { store, actions } = useContext(Context);
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<Container>
				<Row>
					<Col sm={true}>
						<Button variant="outline-light" className="save-button" onClick={handleShow}>
							Save changes
						</Button>
						<CreateOutfit show={show} handleClose={handleClose} />
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default CreateOutfitBtn;
