import React, { useState, useContext } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { getActions } from "../store/flux.js";
import "../../styles/addClothing.scss";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
toast.configure();

const AddCollection = props => {
	const { store, actions } = useContext(Context);
	const { show, handleClose } = props;
	const [name, setName] = useState("");
	const notify = () => toast("Saved collection!");
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
				<Button
					type="submit"
					id="btnCollection"
					value="button"
					onClick={() => {
						handleSubmit();
						handleClose();
						resetInputField();
						notify();
						handleClose();
					}}>
					Save new collection
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
