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
	};

	return (
		<Modal show={show} onHide={handleClose}>
			<Modal.Header closeButton>
				<Modal.Title>Add clothing</Modal.Title>
			</Modal.Header>
			<Modal.Body />
			<div className="group">
				{" "}
				<label className="pass label">Clothing&apos;s name</label>{" "}
				<input
					type="text"
					className="input"
					id="clothing-name"
					placeholder="Clothing's name"
					value={name}
					onChange={event => setName(event.target.value)}
				/>{" "}
			</div>
			<Form.Control size="sm" as="select" value={category} onChange={event => setCategory(event.target.value)}>
				<option value="top">top</option>
				<option value="bottom">bottom</option>
				<option value="footwear"> footwear</option>
			</Form.Control>
			<div className="group">
				{" "}
				<label className="pass label">Image url</label>{" "}
				<input
					type="text"
					className="input"
					id="clothing-image-url"
					placeholder="Image url"
					value={image}
					onChange={event => setImage(event.target.value)}
				/>{" "}
			</div>
			<Modal.Footer>
				<Button variant="secondary" onClick={handleClose}>
					Close
				</Button>
				<Button variant="primary" onClick={() => actions.handleSubmit(data)}>
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
