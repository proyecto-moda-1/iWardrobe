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
	const [data, setData] = useState("");
	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(
				`https://3001-azure-cheetah-f4q63b50.ws-eu08.gitpod.io/api/clothing?category=top`
			);
			const newData = await response.json();
			setData(newData);
		};
		fetchData();
	}, []);
	//   if (data) {
	//     return <d</div>;
	//   } else {
	//     return null;
	//   }
	// }

	// fetch("https://3001-azure-cheetah-f4q63b50.ws-eu08.gitpod.io/api/clothing?category=top")
	// 	.then(response => response.json())
	// 	.then(data => console.log(data));
	// const [top, setTop] = useState([]);
	// //useEffect
	// useEffect(() => {
	// 	setTop({});
	// }, []);

	return (
		<>
			<Container>
				<Row>
					<Col sm={true}>
						<h2>Your Clothing</h2>
						<DropdownButton id="dropdown-button" title="Top">
							<Dropdown.Item href="#/action-1"> {data} </Dropdown.Item>
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
