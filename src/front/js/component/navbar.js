import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "../../styles/navbar.scss";

export const Navbar = () => {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	return (
		<div className="headerNavbar">
			<div className="logoNavbar" type="submit">
				<Link className="text-decoration-none" to="/profile">
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
						{localStorage.getItem("token") ? (
							<Link to="/">
								<button className="btnLogin" href="#" onClick={() => localStorage.removeItem("token")}>
									LOG OUT
								</button>
							</Link>
						) : (
							<Link to="/login">
								<button className="btnLogin" href="#">
									LOGIN
								</button>
							</Link>
						)}
					</li>
				</ul>
			</nav>
		</div>
	);
};
