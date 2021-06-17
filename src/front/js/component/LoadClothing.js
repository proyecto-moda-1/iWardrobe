import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../../styles/LoadClothing.scss";
import { Context } from "../store/appContext";
import { getActions } from "../store/flux.js";

const LoadClothing = props => {
	const { show, handleClose } = props;
	const [name, setName] = useState("");
	const [image, setImage] = useState("");
	const [category, setCategory] = useState("");
	const { store, actions } = useContext(Context);

	const handleSubmit = () => {
		const data = {
			user_id: 1,
			name: name,
			image: image,
			category: category
		};
		actions.createClothing(data);
	};

	return (
		<Modal show={show} onHide={handleClose}>
			<Modal.Header closeButton>
				<Modal.Title>Add Clothing</Modal.Title>
			</Modal.Header>
			{/* <Modal.Body className="modal-body" /> */}
			<div className="group-clothing">
				{" "}
				<label className="pass label" />{" "}
				<input
					type="text"
					className="input-clothing"
					id="clothing-name"
					placeholder="Clothing's Name"
					value={name}
					onChange={event => setName(event.target.value)}
				/>{" "}
			</div>
			<Form.Control
				size="sm"
				as="select"
				className="select-clothing"
				value={category}
				onChange={event => setCategory(event.target.value)}>
				<option value="0">Category</option>
				<option value="top">Top</option>
				<option value="bottom">Bottom</option>
				<option value="footwear"> Footwear</option>
			</Form.Control>
			<div className="group-image">
				{" "}
				<label className="pass label" />{" "}
				<input
					type="text"
					className="input-image"
					id="clothing-image-url"
					placeholder="Image URL"
					value={image}
					onChange={event => setImage(event.target.value)}
				/>{" "}
			</div>
			<Modal.Footer>
<<<<<<< HEAD
				<Button variant="outline-secondary" onClick={handleClose}>
					Close
				</Button>
				<Button variant="outline-secondary" onClick={handleSubmit}>
=======
				<Button variant="outline-light" className="close-button" onClick={handleClose}>
					Close
				</Button>
				<Button variant="outline-light" className="save-button" onClick={handleSubmit}>
>>>>>>> main
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
