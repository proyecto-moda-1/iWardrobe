import React, { useState, useContext, useCallback } from "react";
import { getActions } from "../store/flux.js";
import { Context } from "../store/appContext";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import "../../styles/LoadClothing.scss";
import PropTypes from "prop-types";

const LoadClothing = props => {
	const { show, handleClose } = props;
	const [name, setName] = useState("");
	const [image, setImage] = useState(null);
	const [category, setCategory] = useState("");
	const { store, actions } = useContext(Context);

	const handleSubmit = () => {
		const data = new FormData();
		data.append("user_id", 1);
		data.append("name", name);
		data.append("image", image[0]);
		data.append("category", category);
		const callback = () => {
			setName("");
			setImage(null);
			setCategory("");
		};
		actions.createClothing(data, callback);
	};

	return (
		<Modal show={show} onHide={handleClose}>
			<Modal.Header closeButton>
				<Modal.Title>Add Clothing</Modal.Title>
			</Modal.Header>
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
			<input className="selectArch" type="file" onChange={e => setImage(e.target.files)} />
			<Modal.Footer>
				<Button className="close-button" onClick={handleClose}>
					Close
				</Button>
				<Button variant="outline-light" className="save-button" onClick={handleSubmit}>
					Save
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
