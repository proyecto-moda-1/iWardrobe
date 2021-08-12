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

	// .then(response => response.json())
	// .then(responseJson =>{
	//     console.log(responseJson);
	// });

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
							placeholder="tucorreo@ejemplo.com"
							value={email}
							onChange={event => setEmail(event.target.value)}
						/>
					</div>
					<div className="group">
						{/* <label className="pass label">Password</label> */}
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
