import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import LoadClothing from "./LoadClothing";

export const Navbar = () => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
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
						<Button variant="primary" onClick={handleShow}>
							Launch demo modal
						</Button>
						<LoadClothing show={show} handleClose={handleClose} />
						<Link to="/">
							<button className="d-flex input-group w-auto" href="#">
								Crea tu Outfit
							</button>
						</Link>
						<Link to="/">
							<button className="d-flex input-group w-auto" href="#">
								Tu Closet
							</button>
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
};
