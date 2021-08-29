import React, { useState, useContext, useCallback } from "react";
import { getActions } from "../store/flux.js";
import { Context } from "../store/appContext";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
// import "../../styles/myOutfit.scss";
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
	const handleUserInput = e => {
		setInputValue(e.target.value);
	};
	//for reset the inputs
	const resetInputField = () => {
		setName("");
		setCategory("0");
	};

	return (
		<Modal show={show} onHide={handleClose}>
			<Modal.Header closeButton>
				<Modal.Title>Add clothing</Modal.Title>
			</Modal.Header>
			<div className="group-clothing">
				{" "}
				<label className="pass label" />{" "}
				<input
					type="text"
					id="clothingName"
					placeholder="Clothing's Name"
					value={name}
					onChange={event => setName(event.target.value)}
				/>{" "}
			</div>
			<Form.Control
				size="sm"
				as="select"
				id="selectClothing"
				value={category}
				onChange={event => setCategory(event.target.value)}>
				<option value="0">Category</option>
				<option value="top">Top</option>
				<option value="bottom">Bottom</option>
				<option value="footwear"> Footwear</option>
			</Form.Control>
			<input className="selectArch" type="file" onChange={e => setImage(e.target.files)} />
			<Modal.Footer>
				<Button variant="outline-light" id="btnClothing" onClick={handleSubmit}>
					Save
				</Button>
				<Button className="close-button" id="btnClothing" onClick={resetInputField}>
					Clear
				</Button>
				<Button type="submit" id="btnClothing" value="button" onClick={handleClose}>
					Close
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default LoadClothing;

LoadClothing.propTypes = {
	show: PropTypes.bool,
	handleClose: PropTypes.func
};