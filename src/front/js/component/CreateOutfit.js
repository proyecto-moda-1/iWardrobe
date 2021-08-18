import React, { useState, useContext } from "react";
import CollectionSelect from "../component/ShowCollection.js";
import AddCollection from "../component/addCollection.js";
import { Context } from "../store/appContext";
import { getActions } from "../store/flux.js";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import CreateOutfitBtn from "./BtnCreate";
import "../../styles/createOutfit.scss";
import Form from "react-bootstrap/Form";
import HeartButton from "./heartBtn";
import PropTypes from "prop-types";

const CreateOutfit = props => {
	const { show, handleClose } = props;
	const [name, setName] = useState("");

	//STATES FOR INSIDE MODAL <ADDCOLLECTION/>
	const [showCollection, setShowCollection] = useState(false);
	const handleCloseCollection = () => setShowCollection(false);
	const handleShowCollection = () => setShowCollection(true);

	const { store, actions } = useContext(Context);

	const handleSubmit = () => {
		const data = {
			outfit_user_id: 1,
			name: name
		};
		actions.createOutfit(data);
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
			<Modal.Header closeButton id="headerCreate">
				{" "}
				Create outfit
			</Modal.Header>
			<label className="pass label" />{" "}
			<input
				type="text"
				id="outfitName"
				placeholder="Name"
				value={name}
				onChange={event => setName(event.target.value)}
			/>{" "}
			{/* AddCollection modal component*/}
			<Button id="btnAddCollection" onClick={handleShowCollection}>
				Add new collection
			</Button>
			<AddCollection show={showCollection} handleClose={handleCloseCollection} />
			{/* Aquí le tenemos que poner el props que le vamos a pasar para que se guarde en favoritos */}
			<CollectionSelect />
			<HeartButton id="heartBtn" />
			<Modal.Footer>
				<Button variant="outline-light" id="btnCreate" onClick={resetInputField}>
					Clear
				</Button>
				<Button variant="outline-light" id="btnCreate" onClick={handleSubmit}>
					Save creation
				</Button>
				<Button type="submit" id="btnCreate" value="button" onClick={handleClose}>
					Close
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default CreateOutfit;

CreateOutfit.propTypes = {
	show: PropTypes.bool,
	handleClose: PropTypes.func
};
