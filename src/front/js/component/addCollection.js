import React, { useState, useContext } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { getActions } from "../store/flux.js";
import "../../styles/addCollection.scss";

const AddCollection = props => {
	const { show, handleClose } = props;
	const [name, setName] = useState("");
	const { store, actions } = useContext(Context);

	const handleSubmit = () => {
		const data = {
			collection_user_id: 1,
			name: name
		};
		actions.createCollection(data);
	};

	return (
		<Modal show={show} onHide={handleClose}>
			<Modal.Header closeButton>
				<Modal.Title>New collection</Modal.Title>
			</Modal.Header>
			<div className="group-clothing">
				{" "}
				<label className="pass label" />{" "}
				<input
					type="text"
					className="input-name"
					id="collection-name"
					placeholder="Name"
					value={name}
					onChange={event => setName(event.target.value)}
				/>{" "}
			</div>
			<Modal.Footer>
				<Button variant="outline-secondary" onClick={handleClose}>
					Close
				</Button>
				<Button variant="outline-secondary" onClick={handleSubmit}>
					Save
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
