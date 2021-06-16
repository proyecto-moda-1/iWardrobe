import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import LoadClothing from "./LoadClothing";
import "../../styles/navbar.scss";

export const Navbar = () => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	return (
		<div className="header">
			<a className="logo" src="" alt="logo">
				OUTFIT PLANNER
			</a>
			<nav>
				<ul className="navLink">
					<li>
						<a href="#">Crea tu Outfit</a>
					</li>
					<li>
						<a href="#">Tu Closet</a>
					</li>
					<li>
						<Button variant="primary" onClick={handleShow}>
							Launch demo modal
						</Button>
						<LoadClothing show={show} handleClose={handleClose} />
					</li>
				</ul>
			</nav>
		</div>
	);
};
