import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import Form from "react-bootstrap/Form";
import PropTypes from "prop-types";
import "../../styles/register.scss";
import { Link } from "react-router-dom";

export const Register = function(props) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [login, setLogin] = useState(true);
	const [repeatPassword, setRepeatPassword] = useState("");
	const [gender, setGender] = useState("");
	const [nickname, setNickname] = useState("");

	const history = useHistory();

	const { store, actions } = useContext(Context);

	const handleRegister = () => {
		const data = {
			nickname: nickname,
			email: email,
			password: password,
			repeatPassword: repeatPassword,
			gender: gender
		};

		actions.createUser(data, () => {
			history.push("/profile");
		});
	};

	return (
		<div className="container">
			<div className="d-flex justify-content-center">
				<div className="loginContainer">
					<label className="userLabel">REGISTER</label>
					<div className="group">
						<input
							type="text"
							className="input btn btn-light"
							id="exampleFormControlInput1"
							placeholder="NickName"
							value={nickname}
							onChange={event => setNickname(event.target.value)}
						/>
					</div>
					<div className="group">
						{" "}
						<input
							id="pass"
							type="text"
							className="input btn btn-light"
							placeholder=" your email address"
							value={email}
							onChange={event => setEmail(event.target.value)}
						/>
					</div>
					<div className="group">
						<input
							type="text"
							className="input btn btn-light"
							id="exampleFormControlInput1"
							placeholder="your password"
							value={password}
							onChange={event => setPassword(event.target.value)}
						/>
					</div>
					<div className="group">
						<input
							id="pass"
							type="text"
							className="input btn btn-light"
							data-type="password"
							placeholder="Repeat your password"
							value={repeatPassword}
							onChange={event => setRepeatPassword(event.target.value)}
						/>
					</div>
					<Form.Control
						id="genderSelect"
						as="select"
						size="sm"
						value={gender}
						onChange={event => setGender(event.target.value)}>
						<option value="0">Gender</option>
						<option value="female">Female</option>
						<option value="male">Male</option>
						<option value="nonbinary"> Non binary</option>
					</Form.Control>
					{/* <div className="group">
						<input
							id="pass"
							type="text"
							className="input btn btn-light"
							placeholder="Gender"
							value={gender}
							onChange={event => setGender(event.target.value)}
						/>
					</div> */}
					<div className="goToLogin">
						<Link to="/login">
							<a href="#">¿Ya tienes una cuenta?</a>
						</Link>
					</div>
					<div className="group">
						<button type="submit" value="button" className="button" onClick={handleRegister}>
							Sign Up
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
