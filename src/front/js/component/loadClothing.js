import React, { useState, useContext, useCallback } from "react";
import { getActions } from "../store/flux.js";
import { Context } from "../store/appContext";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
// import "../../styles/myOutfit.scss";
import "../../styles/LoadClothing.scss";
import PropTypes from "prop-types";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
toast.configure();

const LoadClothing = props => {
	const { show, handleClose } = props;
	const [name, setName] = useState("");
	const [image, setImage] = useState(null);
	const [category, setCategory] = useState("");
	const { store, actions } = useContext(Context);
	const notify = () => toast("Upload clothing!");

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
	const resetInputField = () => {
		setName("");
		setCategory("0");
	};

	return (
		<Modal show={show} onHide={handleClose}>
			<Modal.Header className="modalClothes" closeButton>
				<Modal.Title className="tittleModal">ADD CLOTHING</Modal.Title>
			</Modal.Header>
			<input className="selectArch" type="file" onChange={e => setImage(e.target.files)} />
			<div className="modalClothing">
				{" "}
				<label />{" "}
				<input
					className="nameClothing"
					type="text"
					placeholder="Enter clothing's name"
					value={name}
					onChange={event => setName(event.target.value)}
				/>{" "}
			</div>
			<Form.Control
				className="ClothingSelect"
				size="sm"
				as="select"
				value={category}
				onChange={event => setCategory(event.target.value)}>
				<option value="0">Category</option>
				<option value="top">Top</option>
				<option value="bottom">Bottom</option>
				<option value="footwear"> Footwear</option>
			</Form.Control>
			<Modal.Footer>
				<Button className="clothingBtn" type="submit" id="btnClothing" value="button" onClick={handleClose}>
					Close
				</Button>
				<Button
					className="uploadClothes"
					id="btnClothing"
					onClick={() => {
						handleSubmit();
						resetInputField();
						notify();
					}}>
					Save
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
