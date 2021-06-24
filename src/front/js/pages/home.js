import React, { useContext, useState, useEffect } from "react";
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
	const [category, setCategory] = useState("");
	const [clothing, setClothing] = useState([]);
	const listItems = clothing.map(item => {
		<Dropdown.Item key={item.id} onClick={changeClothing}>
			{" "}
			{item}
		</Dropdown.Item>;
	});

	const changeClothing = e => {
		e.preventDefault();
	};

	useEffect(() => {
		actions.getClothing();
	}, [category]);
	// useEffect(() => {
	// 	actions.getBottom();
	// }, [category]);

	// useEffect(() => {
	// 	actions.getFootwear();
	// }, [category]);

	return (
		<>
			<Container>
				<Row>
					<Col sm={true}>
						<h2>Your Clothing</h2>
						<DropdownButton
							id="dropdown-button"
							title="Top"
							onClick={() => setCategory("top")}></DropdownButton>
						<br />
						<DropdownButton
							id="dropdown-basic-button"
							title=" Bottom"
							onClick={() => setCategory("bottom")}></DropdownButton>
						<br />
						<DropdownButton
							id="dropdown-button"
							title="Footwear"
							onClick={() => setCategory("footwear")}></DropdownButton>
					</Col>
					<Col sm={true}></Col>
					<Col sm={true}></Col>
				</Row>
			</Container>
		</>
	);
};
// const endpoint = process.env.BACKEND_URL + "/api/clothing?category=" + category;
// const config = {
// 	method: "GET",
// 	headers: {
// 		"Content-Type": "application/json"
// 	}
// };
// fetch(endpoint, config)
// 	.then(response => response.json())
// 	.then(data => {
// 		console.log(data);
// 	})
// 	.catch(err => console.error(err));
