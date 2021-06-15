import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import DropdownButton from "react-bootstrap/DropdownButton";
import SplitButton from "react-bootstrap/SplitButton";
import Dropdown from "react-bootstrap/Dropdown";
import Carousel from "react-bootstrap/Carousel";
// import Card from "react-bootstrap/Card";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<Dropdown>
				<Dropdown.Toggle id="dropdown-basic">Dropdown Button</Dropdown.Toggle>

				<Dropdown.Menu>
					<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
					<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
					<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
			<Dropdown>
				<Dropdown.Toggle id="dropdown-basic">Dropdown Button</Dropdown.Toggle>

				<Dropdown.Menu>
					<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
					<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
					<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
			{/* <Card style={{ width: "18rem" }}>
				<Card.Img variant="top" src="" />
				<Card.Body>
					<Card.Title>Card Title</Card.Title>
					<Card.Text />
				</Card.Body>
			</Card>{" "} */}
		</>
	);
};
