import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../../styles/footer.scss";

export const Footer = () => (
	<footer className="page-footer font-small unique-color-dark">
		<div className="container-fluid text-center text-md-left">
			<div className="row">
				<div className="col-md-6 mt-md-0 mt-3">
					<br />

					<h5 className="text-uppercase">iWardrobe</h5>
					<br />

					<p>Welcome to iWardrobe. We would like to introduce your a new way of organizing your clothes! </p>
					<p>
						From make the perfect outfit for the next MET Gala, to organise that summer vacations that you
						deseperately need.
					</p>
					<p>Hope your have a lot of fun and enjoy this app as much as we did on the process of making it!</p>

					<p>Lots of love!</p>
					<p> iWardrobe Team</p>
				</div>

				<div className="col-md-3 mb-md-0 mb-3">
					<br />

					<h5 className="text-uppercase">COMPANY</h5>

					<ul className="list-unstyled">
						<li>
							<Link to="#!">Our team</Link>
						</li>
						<br />

						<li>
							<Link to="#!">Conctact us</Link>
						</li>
						<br />
						<li>
							<Link to="#!">About us</Link>
						</li>
					</ul>
				</div>

				<div className="col-md-3 mb-md-0 mb-3">
					<br />

					<h5 className="text-uppercase">HOW TO FIND US</h5>

					<ul className="list-unstyled">
						<li>
							<h5>Gabriela Tablante</h5>
						</li>

						<li>
							<Link to="https://www.linkedin.com/in/mgtablante/" target="_blank">
								<a className="btn-floating btn-li mx-1">
									<i className="fab fa-linkedin"></i>
								</a>
							</Link>
							<Link to="https://github.com/yolandagb">
								<i className="fab fa-github"></i>
							</Link>
						</li>
						<li>
							<br />

							<h5>Yolanda García</h5>
						</li>
						<li>
							<Link to="https://www.linkedin.com/in/yolandagarciabarrancofullstackdeveloper/">
								<a className="btn-floating btn-li mx-1">
									<i className="fab fa-linkedin"></i>
								</a>
							</Link>
							<Link to="https://github.com/yolandagb">
								<i className="fab fa-github" id="socialnetwrork"></i>
							</Link>
						</li>
						<br />

						<li>
							<Link to="https://4geeksacademy.com/es/inicio" target="_blank">
								<h5>4GeeksAcademy</h5>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>

		<div className="footer-copyright text-center py-3">
			© 2021 Copyright:
			<Link to="https://github.com/proyecto-moda-1/outfit-planner/tree/main" target="_blank">
				{" "}
				iWardrobe team
			</Link>
		</div>
	</footer>
);
