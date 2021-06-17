import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";
import "../../styles/addCollection.scss";
import { Context } from "../store/appContext";
import { getActions } from "../store/flux.js";

const AddCollection = props => {
	const { show, handleClose } = props;
	const [name, setName] = useState("");
	const [image, setImage] = useState("");
	const [collection_user_id, setUser] = useState("");
	const { store, actions } = useContext(Context);

	const handleSubmit = () => {
		const data = {
			collection_user_id: 1,
			name: name,
			image: image
		};
		actions.createClothing(data);
	};

	return (
		<Modal show={show} onHide={handleClose}>
			<Modal.Header closeButton>
				<Modal.Title>New Collection</Modal.Title>
			</Modal.Header>
            <div className="group-user-id">
				{" "}
				<label className="pass label" />{" "}
				<input
					type="text"
					className="input-image"
					id="clothing-image-url"
					placeholder="User Id"
					value={collection_user_id}
					onChange={event => setUser(event.target.value)}
				/>{" "}
			</div>
			<div className="group-clothing">
				{" "}
				<label className="pass label" />{" "}
				<input
					type="text"
					className="input-clothing"
					id="clothing-name"
					placeholder="Collections Name"
					value={name}
					onChange={event => setName(event.target.value)}
				/>{" "}
			</div>
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
				<Button variant="outline-secondary" onClick={handleClose}>
					Close
				</Button>
				<Button variant="outline-secondary" onClick={handleSubmit}>
					Save Changes
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

AddCollection.propTypes = {
	show: PropTypes.bool,
	handleClose: PropTypes.func
};

export default AddCollection;
