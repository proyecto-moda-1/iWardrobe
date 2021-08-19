import React, { useState, useContext } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { getActions } from "../store/flux.js";
import "../../styles/createOutfit.scss";

const AddCollection = props => {
	const { store, actions } = useContext(Context);
	const notify = () => toast("Wow so easy !");
	const { show, handleClose } = props;
	const [name, setName] = useState("");

	const handleSubmit = () => {
		const data = {
			collection_user_id: 1,
			name: name
		};
		actions.createCollection(data);
	};
	const handleUserInput = e => {
		setInputValue(e.target.value);
	};
	//for reset the inputs
	const resetInputField = () => {
		setName("");
	};

	return (
		<Modal show={show} onHide={handleClose}>
			<Modal.Header closeButton>
				<Modal.Title>New collection</Modal.Title>
			</Modal.Header>
			<div className="group-clothing">
				{" "}
				<label className="pass-label" />{" "}
				<input
					type="text"
					id="collectionName"
					placeholder="Collection Name"
					value={name}
					onChange={event => setName(event.target.value)}
				/>{" "}
			</div>
			<Modal.Footer>
				<Button variant="outline-light" id="btnCollection" onClick={resetInputField}>
					Clear
				</Button>
				<Button type="submit" id="btnCollection" value="button" onClick={handleSubmit}>
					Save
				</Button>
				<Button type="submit" id="btnCollection" value="button" onClick={handleClose}>
					Close
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default AddCollection;

AddCollection.propTypes = {
	show: PropTypes.bool,
	handleClose: PropTypes.func
};
