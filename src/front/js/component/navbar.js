import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.scss";

export const Navbar = () => {
	return (
		<div className="header">
			<a
				className="logo"
				src="https://image.freepik.com/vector-gratis/plantilla-logotipo-carrusel-minimalista-vintage_111630-407.jpg"
				alt="logo">
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
						<a className="Mdal" href="#">
							<button className="btn btn-secondary">Añadir tu ropa</button>
						</a>
					</li>
				</ul>
			</nav>
		</div>
	);
};
