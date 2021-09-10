import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../../styles/footer.scss";

export const Footer = () => (
	<footer>
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
		<div className="headerFooter">
			<div className="textAcademy">
				<li type="submit">
					<Link to="https://4geeksacademy.com/es/inicio" className="academy">
						4Geeks Academy
					</Link>
				</li>
			</div>
			<div className="textFooter">
				<li type="submit">
					<Link href="https://github.com/mgtablante" className="linkedinGaby">
						<i className="fab fa-github" />
					</Link>
					<p className="textGaby"> Gabriela Tablante</p>
				</li>
				<li type="submit">
					<Link href="https://github.com/yolandagb" className="linkedinYola">
						{" "}
						<i className="fab fa-github" />
						<p className="textYola"> Yolanda García</p>
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
			</div>
		</div>
	</footer>
);
