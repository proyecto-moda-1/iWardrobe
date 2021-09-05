import React, { useState } from "react";
import Button from "react-bootstrap/Button";
// import LoadClothing from "./loadClothing";
import { Link } from "react-router-dom";
import "../../styles/navbar.scss";

export const Navbar = () => {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	return (
		<div className="headerNavbar">
			<div className="logo" type="submit">
				<Link to="/profile" className="text-decoration-none">
					iWardrobe
				</Link>
			</div>

			<nav>
				<ul className="navLink">
					<li>
						<Link to="/profile">
							<button className="btnProfileS" href="#">
								PROFILE
							</button>
						</Link>
					</li>
					<li>
						<Link to="/MyOutfit">
							<button className="btnOutfit" href="#">
								OUTFIT
							</button>
						</Link>
					</li>

					<li>
						<Link to="/closet">
							<button className="btnCloset" href="#">
								CLOSET
							</button>
						</Link>
					</li>
					<li>
						<Link to="/login">
							<button className="btnLogin" href="#">
								LOGIN
							</button>
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
};
