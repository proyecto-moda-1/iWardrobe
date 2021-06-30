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
			<a className="logo" href="/" src="" alt="logo">
				iWardrobe
			</a>
			<nav>
				<ul className="navLink">
					<li>
						<Link to="/MyCloset">
							<a href="#">Create your outfit</a>
						</Link>
					</li>
					<li>
						<a href="/closet">Your closet</a>
					</li>
					<li>
						<Button variant="primary" onClick={handleShow}>
							Add clothes
						</Button>
						<LoadClothing show={show} handleClose={handleClose} />
					</li>
				</ul>
			</nav>
		</div>
	);
};
