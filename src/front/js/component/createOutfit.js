import React, { useState, useContext } from "react";
import CollectionSelect from "./collectionSelect ";
import AddCollection from "./addCollection.js";
import { getActions } from "../store/flux.js";
import { Context } from "../store/appContext";
import Button from "react-bootstrap/Button";
import SelectOutfitBtn from "./selectOutfitBtn";
import Modal from "react-bootstrap/Modal";
import CreateOutfitBtn from "./btnCreate";
import "../../styles/createOutfit.scss";
import Form from "react-bootstrap/Form";
import PropTypes from "prop-types";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
toast.configure();

const CreateOutfit = props => {
	console.log(props, "#########");
	const { show, handleClose } = props;
	const [todayOutfit, setTodayOutfit] = useState(false);
	const [name, setName] = useState("");
	const notify = () => toast("Saved outfit!");
	//STATES FOR INSIDE MODAL <ADDCOLLECTION/>
	const [showCollection, setShowCollection] = useState(false);
	const handleCloseCollection = () => setShowCollection(false);
	const handleShowCollection = () => setShowCollection(true);

	const { store, actions } = useContext(Context);
	const handleSubmit = id => {
		const data = {
			outfit_user_id: 1,
			name: name,
			today: todayOutfit
		};
		console.log(props.clothing, "##################");
		actions.createOutfit(data, props.clothing);
	};
	const handleUserInput = e => {
		setInputValue(e.target.value);
	};
	const resetInputField = () => {
		setName("");
	};
	return (
		<Modal show={show} onHide={handleClose}>
			<Modal.Header className="modalOutfit" closeButton>
				{" "}
				<Modal.Title className="tittleOutfit">CREATE YOUR OUTFIT</Modal.Title>
			</Modal.Header>
			<div className="modalOutfit">
				<label />{" "}
				<input
					className="nameOutfit"
					type="text"
					placeholder="Enter outfit name"
					value={name}
					onChange={event => setName(event.target.value)}
				/>{" "}
			</div>
			<div className="selectCollection">
				<CollectionSelect />
			</div>
			{/* AddCollection modal component*/}
			<Button className="btnAddCollection" onClick={handleShowCollection}>
				Add new collection
			</Button>
			<AddCollection show={showCollection} handleClose={handleCloseCollection} />
			<Modal.Footer>
				<div className="textCheck">USE TODAY</div>
				<input
					className="ckeckToday"
					type="checkbox"
					onChange={() => setTodayOutfit(!todayOutfit)}
					defaultValue={todayOutfit}></input>{" "}
				<Button
					className="btncreateOutfit"
					onClick={() => {
						handleSubmit(props.id);
						handleClose();
						resetInputField();
						notify();
						handleClose();
					}}>
					Save
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default CreateOutfit;

CreateOutfit.propTypes = {
	show: PropTypes.bool,
	handleClose: PropTypes.func,
	name: PropTypes.string,
	clothing: PropTypes.object,
	id: PropTypes.int,
	today: PropTypes.bool
};
