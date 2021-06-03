import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.scss";

export const Navbar = () => {
	const modal = document.getElementById("myModal");

	// Get the button that opens the modal
	const btn = document.getElementById("myBtn");

	// Get the <span> element that closes the modal
	const span = document.getElementsByClassName("close")[0];

	// When the user clicks the button, open the modal
	btn.onClick = function() {
		modal.style.display = "block";
	};

	// When the user clicks on <span> (x), close the modal
	span.onClick = function() {
		modal.style.display = "none";
	};

	// When the user clicks anywhere outside of the modal, close it
	window.onClick = function(event) {
		if (event.target == modal) {
			modal.style.display = "none";
		}
	};
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container-fluid">
				<a className="navbar-brand" href="#">
					Navbar
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-mdb-toggle="collapse"
					data-mdb-target="#navbarNavAltMarkup"
					aria-controls="navbarNavAltMarkup"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<i className="fas fa-bars" />
				</button>
				<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
					<div className="navbar-nav">
						<button id="myBtn">Añadir tu ropa</button>
						<div id="myModal" className="modal">
							<div className="modal-content">
								<span className="close">&times;</span>
								<p>Some text in the Modal..</p>
							</div>
						</div>
						<button className="d-flex input-group w-auto" href="#">
							Crea tu Outfit
						</button>
						<button className="d-flex input-group w-auto" href="#">
							Tu Closet
						</button>
					</div>
				</div>
			</div>
		</nav>
	);
};
