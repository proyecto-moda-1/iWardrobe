import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { getActions } from "../store/flux.js";
import PropTypes from "prop-types";
import CarouselClothing from "../component/CarouselClothing.js";
import "../../styles/home.scss";
import Form from "react-bootstrap/Form";
import DropdownButton from "react-bootstrap/DropdownButton";
import SplitButton from "react-bootstrap/SplitButton";
import Dropdown from "react-bootstrap/Dropdown";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const MyCloset = props => {
	const { store, actions } = useContext(Context);
	const [top, setTop] = useState({});
	const [bottom, setBottom] = useState({});
	const [footwear, setFootwear] = useState({});
	const [selectedItems, setselectedItems] = useState({
		top: {},
		bottom: {},
		footwear: {}
	});
	const topItems = store.top.map(item => {
		return (
			<option key={item.id} value={item.id}>
				{item.name}
			</option>
		);
	});
	const bottomItems = store.bottom.map(item => {
		return (
			<option key={item.id} value={item.id}>
				{" "}
				{item.name}
			</option>
		);
	});
	const footwearItems = store.footwear.map(item => {
		return (
			<option key={item.id} value={item.id}>
				{" "}
				{item.name}
			</option>
		);
	});

	useEffect(() => {
		actions.getClothing("top");
		actions.getClothing("bottom");
		actions.getClothing("footwear");
	}, []);

	return (
		<>
			<Container>
				<Row>
					<Col sm={true}>
						<h2>Your Clothing</h2>
						<Form.Control
							size="sm"
							as="select"
							className="select-clothing"
							defaultValue={top}
							onChange={event => {
								setTop(event.target.value);
								setselectedItems({
									...selectedItems,
									top: store.top.find(item => item.id == event.target.value)
								});
							}}>
							<option selected value="0">
								Top
							</option>
							{topItems}
						</Form.Control>
						<br />
						<Form.Control
							size="sm"
							as="select"
							className="select-clothing"
							defaultValue={bottom}
							onChange={event => {
								setBottom(event.target.value);
								setselectedItems({
									...selectedItems,
									bottom: store.bottom.find(item => item.id == event.target.value)
								});
							}}>
							<option value="0">Bottom</option>
							{bottomItems}
						</Form.Control>

						<br />
						<Form.Control
							size="sm"
							as="select"
							className="select-clothing"
							defaultValue={footwear}
							onChange={event => {
								setFootwear(event.target.value);
								setselectedItems({
									...selectedItems,
									footwear: store.footwear.find(item => item.id == event.target.value)
								});
							}}>
							<option value="0">Footwear</option>
							{footwearItems}
						</Form.Control>
					</Col>
					<Col sm={true}> </Col>
					<Col sm={true}>
						<h2>Carousel</h2>
						<br />
						<div className="main-container">
							<CarouselClothing selectedItems={selectedItems} />
						</div>
					</Col>
				</Row>
			</Container>
		</>
	);
};