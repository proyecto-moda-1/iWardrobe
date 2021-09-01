import React, { useState, useContext } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Context } from "../store/appContext";
import { getActions } from "../store/flux.js";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
toast.configure();

// This is main function
function GeeksforGeeks() {
	// function which is called when
	// button is clicked
	const notify = () => {
		// Calling toast method by passing string
		toast("Saved creation!", { position: toast.POSITION.TOP_CENTER });
	};
	return (
		<div className="GeeksforGeeks">
			<button onClick={notify}>Click Me!</button>
		</div>
	);
}

export default GeeksforGeeks;
