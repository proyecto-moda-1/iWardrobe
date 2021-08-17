import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
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
		<div className="container">
			<div className="d-flex justify-content-center">
				<div className="loginContainer">
					<label className="userlabel">LOGIN</label>
					<div className="group">
						<input
							type="text"
							className="input btn btn-light"
							id="exampleFormControlInput1"
							placeholder="email@example.com"
							value={email}
							onChange={event => setEmail(event.target.value)}
						/>
					</div>
					<div className="group">
						<input
							type="text"
							className="input btn btn-light"
							id="exampleFormControlInput1"
							placeholder="password"
							value={password}
							onChange={event => setPassword(event.target.value)}
						/>
					</div>
					<div className="group">
						<button type="submit" value="boton" className="button" onClick={handleSubmit}>
							Sign in
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
