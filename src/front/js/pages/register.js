import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import "../../styles/register.scss";
import { Context } from "../store/appContext";

export const Register = function(props) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [login, setLogin] = useState(true);
	const [repeatPassword, setRepeatPassword] = useState("");
	const [gender, setGender] = useState("");
	const [image, setImage] = useState("");
	const [nickname, setNickname] = useState("");

	const history = useHistory();

	const { store, actions } = useContext(Context);

	const handleRegister = () => {
		const data = {
			nickname: nickname,
			email: email,
			password: password,
			repeatPassword: repeatPassword,
			gender: gender,
			image: image
		};

		actions.createUser(data, () => {
			history.push("/profile");
		});
	};

	return (
		<div className="container">
			<div className="col-md-8 mx-auto p-0">
				<div className="d-flex justify-content-center">
					<div className="login-box">
						<div className="login-snip">
							{" "}
							<a className="tittle">REGISTER</a>
							<div className="loginContainer">
								<div className="group">
									<label className="user label">Nickname</label>
									<input
										type="text"
										className="input btn btn-light"
										id="exampleFormControlInput1"
										placeholder="nickname"
										value={nickname}
										onChange={event => setNickname(event.target.value)}
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
									<label className="pass label">Repeat Password</label>
									<input
										id="pass"
										type="password"
										className="input btn btn-light"
										data-type="password"
										placeholder="Repeat your password"
										value={repeatPassword}
										onChange={event => setRepeatPassword(event.target.value)}
									/>
								</div>
								<div className="group">
									<label className="pass label">E-mail</label>
									<input
										id="pass"
										type="email"
										className="input btn btn-light"
										placeholder="Enter your email address"
										value={email}
										onChange={event => setEmail(event.target.value)}
									/>
								</div>
								<div className="group">
									<label className="pass label">Gender</label>
									<input
										id="pass"
										type="text"
										className="input btn btn-light"
										placeholder="Gender"
										value={gender}
										onChange={event => setGender(event.target.value)}
									/>
								</div>
								<div className="group">
									<label className="pass label">Image</label>
									<input
										id="pass"
										type="text"
										className="input btn btn-light"
										placeholder="Imagen"
										value={image}
										onChange={event => setImage(event.target.value)}
									/>
								</div>
								<div className="group">
									<button type="submit" value="boton" className="button" onClick={handleRegister}>
										Sign Up
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
