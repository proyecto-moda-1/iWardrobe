import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import Form from "react-bootstrap/Form";
import PropTypes from "prop-types";
import "../../styles/register.scss";
import { Link } from "react-router-dom";
import Ropa2 from "../../img/ropa2.png";

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
		<div className="bodyRegister">
			<img className="imgRegister" src={Ropa2} />

			<div className="containerRegister">
				<div className="containerBoxRegister">
					<label className="tittleRegister">REGISTER</label>
					<div className="groupRegister">
						<input
							type="text"
							className="inputRegister btn btn-light"
							id="exampleFormControlInput1"
							placeholder="Nickname"
							value={nickname}
							onChange={event => setNickname(event.target.value)}
						/>
					</div>
					<div className="groupRegister">
						{" "}
						<input
							id="pass"
							type="text"
							className="inputRegister btn btn-light"
							placeholder="  E-mail "
							value={email}
							onChange={event => setEmail(event.target.value)}
						/>
					</div>
					<div className="groupRegister">
						<input
							type="password"
							className="inputRegister btn btn-light"
							id="exampleFormControlInput1"
							placeholder=" Password"
							value={password}
							onChange={event => setPassword(event.target.value)}
						/>
					</div>
					<div className="groupRegister">
						<input
							id="pass"
							type="password"
							className="inputRegister btn btn-light"
							data-type="password"
							placeholder="Repeat password"
							value={repeatPassword}
							onChange={event => setRepeatPassword(event.target.value)}
						/>
					</div>
					<div className="groupRegister">
						<Form.Control
							className="genderDrop"
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
					</div>

					<div className="goToLogin">
						<Link to="/login">Do you have an account?</Link>
					</div>
					<div className="goToLogin">
						<button type="submit" value="button" className="btnRegister" onClick={handleRegister}>
							Sign up
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
