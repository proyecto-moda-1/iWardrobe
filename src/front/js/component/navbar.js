import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import LoadClothing from "./LoadClothing";
import { Link } from "react-router-dom";
import "../../styles/navbar.scss";

export const Navbar = () => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	return (
		<div className="header">
			<a className="logo" href="/ " src="" alt="logo">
				OUTFIT PLANNER
			</a>
			<nav>
				<ul className="navLink">
					<li>
						<Link to="/MyCloset">
							<a href="#">Crea tu Outfit</a>
						</Link>
					</li>
					<li>
						<a href="/closet">Tu Closet</a>
					</li>
					<li>
						<Button variant="primary" onClick={handleShow}>
							Add Clothing
						</Button>
						<LoadClothing show={show} handleClose={handleClose} />
					</li>
				</ul>
			</nav>
		</div>
	);
};
