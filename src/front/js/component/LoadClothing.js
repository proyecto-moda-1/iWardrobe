import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../../styles/navbar.scss";

const LoadClothing = props => {
	const { show, handleClose } = props;
	return (
		<Modal show={show} onHide={handleClose}>
			<Modal.Header closeButton>
				<Modal.Title>Modal heading</Modal.Title>
			</Modal.Header>
			<Modal.Body>Woohoo, youre reading this text in a modal!</Modal.Body>
			<Modal.Footer>
				<Button variant="secondary" onClick={handleClose}>
					Close
				</Button>
				<Button variant="primary" onClick={handleClose}>
					Save Changes
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

LoadClothing.propTypes = {
	show: PropTypes.bool,
	handleClose: PropTypes.func
};

export default LoadClothing;
