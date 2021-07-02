import React, { useState, useContext } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { getActions } from "../store/flux.js";
import CreateOutfitBtn from "./BtnCreate";

const CreateOutfit = props => {
	const { show, handleClose } = props;
	const [name, setName] = useState("");
	const { store, actions } = useContext(Context);

	const handleSubmit = () => {
		const data = {
			outfit_user_id: 1,
			name: name
		};
		actions.createOutfit(data);
	};

	return (
		<Modal show={show} onHide={handleClose}>
			<Modal.Header closeButton>
				<Modal.Title></Modal.Title>
			</Modal.Header>
			<div className="outfit">
				{" "}
				<label className="pass label" />{" "}
				<input
					type="text"
					className="input-outfit"
					id="outfit-name"
					placeholder="Name"
					value={name}
					onChange={event => setName(event.target.value)}
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

CreateOutfit.propTypes = {
	show: PropTypes.bool,
	handleClose: PropTypes.func
};

export default CreateOutfit;
