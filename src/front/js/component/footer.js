import React, { Component } from "react";
import { Link } from "react-router-dom";

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
		<div className="header">
			<li className="text" type="submit">
				<Link className="academy" href="https://4geeksacademy.com/es/inicio">
					4Geeks Academy
				</Link>
			</li>
			<ul className="text">
				<li className="text-left" type="submit">
					<Link className="linkedinGaby" href="https://github.com/mgtablante">
						<i className="fab fa-github" />
						Gabriela Tablante
					</Link>
				</li>
				<li className="text" type="submit">
					<Link className="linkedinYola" href="https://github.com/yolandagb">
						{" "}
						<i className="fab fa-github" />
						Yolanda García
					</Link>
				</li>

				{/* <ul className="col"> */}
				{/* <div className="col-4"> */}
				{/* <li className="academy">
					<a className="col-4" href="https://4geeksacademy.com/es/inicio">
						4Geeks Academy
					</a>
				</li> */}

				{/* <li className="proyect">
					<a className="col-4" href="">
						iWardrobe Proyect by{" "}
					</a>
				</li>
				<li className="linkedinGabyYola">
					<a href="https://github.com/mgtablante">Gabriela Tablante &</a>
					<a href="https://github.com/yolandagb"> Yolanda García</a>
				</li> */}
			</ul>
		</div>
	</footer>
);
