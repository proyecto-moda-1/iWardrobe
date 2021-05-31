import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
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
						<button className="d-flex input-group w-auto" aria-current="page" href="#">
							Añadir tu ropa
						</button>
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
