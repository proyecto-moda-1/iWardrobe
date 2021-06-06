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
			password: password,
			nickname: nickname,
			gender: gender,
			image: image
		};

		actions.createUser(data, () => {
			history.push("/");
		});
	};

	return (
		<div className="row">
			<div className="col-md-6 mx-auto p-0">
				<div className="card">
					<div className="login-box">
						<div className="login-snip">
							{" "}
							<input id="tab-1" type="radio" name="tab" className="sign-in" checked />
							<label className="tab-1 tab">Login</label>{" "}
							<div className="login-space">
								<div className="login">
									<div className="group">
										{" "}
										<label className="user label">NickName</label>{" "}
										<input
											type="email"
											className="input"
											id="exampleFormControlInput1"
											placeholder="tucorreo@ejemplo.com"
											value={email}
											onChange={event => setEmail(event.target.value)}
										/>{" "}
									</div>
									<div className="group">
										{" "}
										<label className="pass label">Password</label>{" "}
										<input
											type="password"
											className="input"
											id="exampleFormControlInput1"
											placeholder="introduce tu contraseña"
											value={password}
											onChange={event => setPassword(event.target.value)}
										/>{" "}
									</div>
									<div className="group">
										{" "}
										<input id="check" type="checkbox" className="check" checked />{" "}
										<label className="check">
											<span className="icon" /> Keep me Signed in
										</label>{" "}
									</div>
									<div className="group">
										{" "}
										<input type="submit" className="button" value="Sign In" />{" "}
									</div>
									<div className="hr" />
									<div className="foot">
										{" "}
										<a href="#">Forgot Password?</a>{" "}
										<div className="sign-up-form">
											<div className="group">
												{" "}
												<input id="tab-2" type="radio" name="tab" className="sign-up" />
												<div className="singup">
													<label className="tab-2tab">Sign Up</label>
													<label className="user label">NickName</label>{" "}
													<input
														type="email"
														className="input"
														id="exampleFormControlInput1"
														placeholder="NickName"
														value={email}
														onChange={event => setEmail(event.target.value)}
													/>{" "}
												</div>
												<div className="group">
													{" "}
													<label className="pass label">Password</label>{" "}
													<input
														type="password"
														className="input"
														id="exampleFormControlInput1"
														placeholder="introduce tu contraseña"
														value={password}
														onChange={event => setPassword(event.target.value)}
													/>{" "}
												</div>
												<div className="group">
													{" "}
													<label className="pass label">Repeat Password</label>{" "}
													<input
														id="pass"
														type="password"
														className="input"
														data-type="password"
														placeholder="Repeat your password"
													/>{" "}
												</div>
												<div className="group">
													{" "}
													<label className="pass label">Email Address</label>{" "}
													<input
														id="pass"
														type="text"
														className="input"
														placeholder="Enter your email address"
													/>{" "}
												</div>
												<div className="group">
													{" "}
													<label className="pass label">Gender</label>{" "}
													<input
														id="pass"
														type="text"
														className="input"
														placeholder="Gender"
													/>{" "}
												</div>
												<div className="group">
													{" "}
													<label className="pass label">Imagen</label>{" "}
													<input
														id="pass"
														type="text"
														className="input"
														placeholder="Imagen"
													/>{" "}
												</div>
												<div className="group">
													{" "}
													<input type="submit" className="button" value="Sign Up" />{" "}
												</div>
												<div className="hr" />
												<div className="foot">
													{" "}
													<label className="tab-1">Already Member?</label>{" "}
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
