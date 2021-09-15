import React, { useState, useContext } from "react";
import CollectionSelect from "./collectionSelect ";
import { getActions } from "../store/flux.js";
import { Context } from "../store/appContext";
import Button from "react-bootstrap/Button";
import SelectOutfitBtn from "./selectOutfitBtn";
import Modal from "react-bootstrap/Modal";
import CreateOutfitBtn from "./createOutfitBtn";
import "../../styles/createOutfit.scss";
import Form from "react-bootstrap/Form";
import PropTypes from "prop-types";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
toast.configure();

const CreateOutfit = props => {
	const { show, handleClose } = props;
	const [todayOutfit, setTodayOutfit] = useState(false);
	const [name, setName] = useState("");
	const notify = () =>
		toast("Saved outfit! Let's go and get some more done ", {
			position: "top-center"
		});
	const { store, actions } = useContext(Context);
	const handleSubmit = id => {
		const data = {
			outfit_user_id: 1,
			name: name,
			today: todayOutfit
		};
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
					placeholder="Outfit name"
					value={name}
					onChange={event => setName(event.target.value)}
				/>{" "}
			</div>
			<div className="selectCollection">
				<CollectionSelect />
			</div>
			<Modal.Footer>
				<div className="textCheck">USE TODAY</div>
				<input
					className="ckeckToday"
					type="checkbox"
					onChange={() => setTodayOutfit(!todayOutfit)}
					defaultValue={todayOutfit}></input>{" "}
				<Button
					variant="outline-light"
					className="createOutfitBtn"
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
	id: PropTypes.number,
	today: PropTypes.bool
};
