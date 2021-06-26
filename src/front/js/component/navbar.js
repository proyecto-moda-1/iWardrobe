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
			<a className="logo" href="/ " src="" alt="logo">
				OUTFIT PLANNER
			</a>
			<nav>
				<ul className="navLink">
					<li>
						<a href="#">Crea tu Outfit</a>
					</li>
					<li>
						<a href="/closet">Tu Closet</a>
					</li>
					<li>
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
					</li>
				</ul>
			</nav>
		</div>
	);
};
