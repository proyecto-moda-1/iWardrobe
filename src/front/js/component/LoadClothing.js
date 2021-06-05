import React, { useState } from "react";
import { useHistory, useContext } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../../styles/LoadClothing.scss";

const LoadClothing = props => {
	const { show, handleClose } = props;
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const history = useHistory();

	const handleSubmit = () => {
		const data = {
			email: email,
			password: password
		};
	};
	return (
		<Modal show={show} onHide={handleClose}>
			<Modal.Header closeButton>
				<Modal.Title>Modal heading</Modal.Title>
			</Modal.Header>
			<Modal.Body />
			<div className="group">
				{" "}
				<label className="user label">Añadir prenda</label>{" "}
				<input
					type="email"
					className="input"
					id="exampleFormControlInput1"
					placeholder="Añadir prenda"
					value={email}
					onChange={event => setEmail(event.target.value)}
				/>{" "}
			</div>
			<div className="group">
				{" "}
				<label className="pass label">Nombre de la prenda</label>{" "}
				<input
					type="text"
					className="input"
					id="exampleFormControlInput1"
					placeholder="Nombre de la prenda"
					value={password}
					onChange={event => setPassword(event.target.value)}
				/>{" "}
			</div>
			<div className="group">
				{" "}
				<label className="pass label">Categoría de la prenda</label>{" "}
				<input
					type="password"
					className="input"
					id="exampleFormControlInput1"
					placeholder="Categoría de la prenda"
					value={password}
					onChange={event => setPassword(event.target.value)}
				/>{" "}
			</div>
			<div className="group">
				{" "}
				<label className="pass label">Título</label>{" "}
				<input
					type="password"
					className="input"
					id="exampleFormControlInput1"
					placeholder="Título"
					value={password}
					onChange={event => setPassword(event.target.value)}
				/>{" "}
			</div>
			<div className="group">
				{" "}
				<label className="pass label">URL imagen</label>{" "}
				<input
					type="password"
					className="input"
					id="exampleFormControlInput1"
					placeholder="introduce la URL de la imagen"
					value={password}
					onChange={event => setPassword(event.target.value)}
				/>{" "}
			</div>
			<Modal.Footer>
				<Button variant="secondary" onClick={handleClose}>
					Close
				</Button>
				<Button variant="primary" onClick={handleClose}>
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
