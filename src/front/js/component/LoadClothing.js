import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { getActions } from "../store/flux.js";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import "../../styles/LoadClothing.scss";
import PropTypes from "prop-types";

const LoadClothing = props => {
	const { store, actions } = useContext(Context);
	const { show, handleClose } = props;
	const [name, setName] = useState("");
	const [image, setImage] = useState("");
	const [category, setCategory] = useState("");
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
				<Modal.Title>Add clothes</Modal.Title>
			</Modal.Header>
			<div className="group-clothing">
				{" "}
				<label className="pass label" />{" "}
				<input
					type="text"
					className="input-clothing"
					id="clothing-name"
					placeholder="Name"
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
					placeholder="Images"
					value={image}
					onChange={event => setImage(event.target.value)}
				/>{" "}
			</div>
			<Modal.Footer>
				<Button variant="outline-light" className="close-button" onClick={handleClose}>
					Close
				</Button>
				<Button variant="outline-light" className="save-button" onClick={handleSubmit}>
					Save changes
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
