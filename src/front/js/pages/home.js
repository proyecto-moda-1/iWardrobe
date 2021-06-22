import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { getActions } from "../store/flux.js";
import PropTypes from "prop-types";
import "../../styles/home.scss";
import DropdownButton from "react-bootstrap/DropdownButton";
import SplitButton from "react-bootstrap/SplitButton";
import Dropdown from "react-bootstrap/Dropdown";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const Home = props => {
	const { store, actions } = useContext(Context);
	//aquí tenemos que poner las constantes y todo eso para que esto funcione (meterle la lógica)
	const [top, setTop] = useState("");
	const [bottom, setBottom] = useState("");
	const [footwear, setFootwear] = useState("");


	// const handleBottom = props => {
	// 	const data = {
	// 		bottom: bottom
	// 	};
	// 	actions.getBottom(data);
	// };
	// const handleFootwear = props => {
	// 	const data = {
	// 		footwear: footwear
	// 	};
	// 	actions.getFootwear(data);
	// };
	return (
		<>
			<Container>
				<Row>
					<Col sm={true}>
						<h2>Your Clothing</h2>
						<DropdownButton onClick={setTop} id="dropdown-button" title="Top">
							<Dropdown.Item href="#/action-1"> </Dropdown.Item>
						</DropdownButton>
						<br />
						<DropdownButton id="dropdown-basic-button" title=" Bottom">
							<Dropdown.Item href="#/action-1"></Dropdown.Item>
						</DropdownButton>
						<br />
						<DropdownButton id="dropdown-button" title="Footwear">
							<Dropdown.Item href="#/action-1"></Dropdown.Item>
						</DropdownButton>
					</Col>
					<Col sm={true}></Col>
					<Col sm={true}></Col>
				</Row>
			</Container>
		</>
	);
};
