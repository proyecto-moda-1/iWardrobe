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
			if (store.error == null) {
				history.push("/home");
			}
		});
	};

	// .then(response => response.json())
	// .then(responseJson =>{
	//     console.log(responseJson);
	// });

	return (
		<div className="row">
			<div className="col-md-6 mx-auto p-0">
				<div className="d-flex justify-content-center">
					<div className="login-box">
						<div className="login-snip">
							{" "}
							<a className="tab-1 tab btn btn-light">Login</a>
							<div className="login">
								<div className="group">
									<label className="user label">Email</label>
									<input
										type="email"
										className="input btn btn-light"
										id="exampleFormControlInput1"
										placeholder="tucorreo@ejemplo.com"
										value={email}
										onChange={event => setEmail(event.target.value)}
									/>
								</div>
								<div className="group">
									<label className="pass label">Password</label>
									<input
										type="password"
										className="input btn btn-light"
										id="exampleFormControlInput1"
										placeholder="introduce tu contraseña"
										value={password}
										onChange={event => setPassword(event.target.value)}
									/>
								</div>
								<div className="group">
									<button
										type="submit"
										value="Login"
										className="button btn btn-outline-secondary btn-block"
										onClick={handleSubmit}>
										Sing In
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
