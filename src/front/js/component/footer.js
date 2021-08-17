import React, { Component } from "react";
import "../../styles/footer.scss";

export const Footer = () => (
	<footer className="navbar navbar-fixed-bottom">
		{/* <div className="gitFooter">
			<section className="mb-4">
				<a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
					<i className="fab fa-github" />
				</a>
				<a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
					<i className="fab fa-github" />
				</a>
			</section>
		</div> */}

		<div className="text-center">
			<a className="text-white" href="https://4geeksacademy.com/es/inicio">
				4Geeks Academy
				<a>iWardrobe Proyect by</a>
				<a href="https://github.com/mgtablante">Gabriela Tablante </a> &
				<a href="https://github.com/yolandagb">Yolanda García</a>
			</a>
		</div>
	</footer>
);
