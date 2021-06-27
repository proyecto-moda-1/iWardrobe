import React, { Component } from "react";

export const Footer = () => (
	<footer className="bg-dark text-center text-white">
		<div className="container p-4 pb-0">
			<section className="mb-4">
				<a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
					<i className="fab fa-facebook-f" />
				</a>

				<a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
					<i className="fab fa-twitter" />
				</a>

				<a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
					<i className="fab fa-instagram" />
				</a>

				<a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
					<i className="fab fa-github" />
				</a>
			</section>
		</div>

		<div className="text-center p-3">
			<a className="text-white" href="https://4geeksacademy.com/es/inicio">
				4Geeks Academy
			</a>
		</div>
	</footer>
);
