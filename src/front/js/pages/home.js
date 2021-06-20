import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { getActions } from "../store/flux.js";
import "../../styles/home.scss";
import DropdownButton from "react-bootstrap/DropdownButton";
import SplitButton from "react-bootstrap/SplitButton";
import Dropdown from "react-bootstrap/Dropdown";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";

export const Home = () => {
	const [top, setTop] = useState(false);
	const [bottom, setBottom] = useState(false);
	const [footwear, setFootwear] = useState(false);

	const handleShow = () => setTop(true);
	const handleShow2 = () => setBottom(true);
    const handleShow3 = () => setFootwear(true);
    
    const getClothing = () => {
		const data = {
            top: [""],
            bottom: [""],
            footwear: [""],   
		};
		actions.getClothing(data);
	};

	return (
		<>
			<Container>
				<Row>
					<Col sm={true}>
						<h2>Your Clothing</h2>
						<DropdownButton onClick={handleShow} id="dropdown-basic-button" title="Top">
							<Dropdown.Item href="#/action-1"> Clothing item 1</Dropdown.Item>
							<Dropdown.Item href="#/action-2">Clothing item 2</Dropdown.Item>
							<Dropdown.Item href="#/action-3"> Clothing item 3</Dropdown.Item>
						</DropdownButton>
						<br />
						<DropdownButton onClick={handleShow2} id="dropdown-basic-button" title=" Bottom">
							<Dropdown.Item href="#/action-1">Clothing item 1</Dropdown.Item>
							<Dropdown.Item href="#/action-2">Clothing item 1</Dropdown.Item>
							<Dropdown.Item href="#/action-3">Clothing item 1</Dropdown.Item>
						</DropdownButton>
						<br />
						<DropdownButton onClick={handleShow3} id="dropdown-basic-button" title="Footwear">
							<Dropdown.Item href="#/action-1">Clothing item 1</Dropdown.Item>
							<Dropdown.Item href="#/action-2">Clothing item 1</Dropdown.Item>
							<Dropdown.Item href="#/action-3">Clothing item 1</Dropdown.Item>
						</DropdownButton>
					</Col>
					<Col sm={true}>
						<h2>Add Collection</h2>
						<DropdownButton id="dropdown-basic-button" title=" Collections">
							<Dropdown.Item href="#/action-1">Favorites</Dropdown.Item>
							<Dropdown.Item href="#/action-2">Weekends</Dropdown.Item>
							<Dropdown.Item href="#/action-3">Work</Dropdown.Item>
						</DropdownButton>
					</Col>
					<Col sm={true}>
						<h2>Carousel</h2>
						<Card border="dark" style={{ width: "18rem", height: "30rem" }}>
							<Card.Body>
								<Card.Title>Aquí va el carousel de ropa</Card.Title>
								<Card.Text>
									<Image
										src="https://th.bing.com/th/id/Rd41717cba1c06f3dc8f3aa882b91a9b1?rik=dItAjU2941FPyA&riu=http%3a%2f%2f1.bp.blogspot.com%2f-OkrmLsY9sbE%2fVH5jEQQLJPI%2fAAAAAAAAjFs%2flCxBl0wU2I0%2fs1600%2ffd36079bdf975a7ebeb9ef63d3507ae6.jpg&ehk=kdN6Qn10fZcrbGqk28ej150eM9eF7F2aTnd1MEoJik0%3d&risl=&pid=ImgRaw"
										fluid
									/>
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</>
	);
};
