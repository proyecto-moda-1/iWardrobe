import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Ropa2 from "../../img/ropa2.png";

import "../../styles/login.scss";
import { Context } from "../store/appContext";

export const Login = function(props) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const history = useHistory();

	const { store, actions } = useContext(Context);

	const handleSubmit = () => {
		const data = {
			email: email,
			password: password
		};
		actions.logIn(data, () => {
			history.push("/profile");
		});
	};

	return (
		<div className="bodyLogin">
			<img className="imgLogin" src={Ropa2} />
			<div className="containerLogin">
				<div className="containerBoxLogin">
					<label className="tittleLogin">LOGIN</label>
					<div className="groupLogin">
						<input
							type="text"
							className="inputLogin btn btn-light"
							id="exampleFormControlInput1"
							placeholder="email@example.com"
							value={email}
							onChange={event => setEmail(event.target.value)}
						/>
					</div>
					<div className="groupLogin">
						<input
							type="password"
							className="inputLogin btn btn-light"
							id="exampleFormControlInput1"
							placeholder="password"
							value={password}
							onChange={event => setPassword(event.target.value)}
						/>
					</div>
					<div className="goToRegister">
						<Link to="/register">
							<a href="#">New here? Create an Account</a>
						</Link>
					</div>
					<div className="groupLogin">
						<button type="submit" value="boton" className="btnLoginVista" onClick={handleSubmit}>
							Sign in
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
