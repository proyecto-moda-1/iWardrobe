import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
// import LoadClothing from "./loadClothing";
import { Link } from "react-router-dom";
import "../../styles/navbar.scss";

export const Navbar = () => {
	const [show, setShow] = useState(false);
	const history = useHistory();
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const logOut = () => {
		const token = localStorage.removeItem("token");
		history.push("/");
	};

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
						{localStorage.getItem("token") ? (
							<Link to="/">
								<button className="btnLogin" href="#" onClick={() => logOut()}>
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
