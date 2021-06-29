import React, { useContext, useState, useEffect } from "react";
import CarouselClothing from "../component/CarouselClothing.js";
import CategorySelect from "../component/CategorySelect.js";
import AddCollection from "../component/addCollection.js";
import Container from "react-bootstrap/Container";
import { Context } from "../store/appContext";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PropTypes from "prop-types";
import "../../styles/home.scss";

export const MyCloset = props => {
	const { store, actions } = useContext(Context);
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const [selectedItems, setselectedItems] = useState({
		top: {},
		bottom: {},
		footwear: {}
	});

	return (
		<>
			<Container>
				<Row>
					<Col sm={true}>
						<CategorySelect />
					</Col>
					<Col sm={true}></Col>
					<Col sm={true}>
						<div className="main-container">
							<CarouselClothing selectedItems={selectedItems} />
						</div>
						<Button variant="primary" onClick={handleShow}>
							Add new collection
						</Button>
						<AddCollection show={show} handleClose={handleClose} />
					</Col>
				</Row>
			</Container>
		</>
	);
};
