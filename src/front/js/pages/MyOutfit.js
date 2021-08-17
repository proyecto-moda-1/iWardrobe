import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import CarouselClothing from "../component/CarouselClothing.js";
import CollectionSelect from "../component/ShowCollection.js";
import AddCollection from "../component/addCollection.js";
import CreateOutfitBtn from "../component/BtnCreate.js";
// import { CollectionDropdown } from "../component/collectionDropdown.js";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../styles/SelectCategory.scss";

export const MyOutfit = props => {
	const { store, actions } = useContext(Context);
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
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
						<h2>Your clothing</h2>
						<br />
						<br />
						<Form.Control
							size="sm"
							as="select"
							className="select-category"
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
						<br />
						<br />
						<br />
						<Form.Control
							size="sm"
							as="select"
							className="select-select-category"
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
						<br />
						<br />
						<br />
						<Form.Control
							size="sm"
							as="select"
							className="select-category"
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
					<Col sm={true}>
						<CollectionSelect />
						<br />
						<br />
						<br />
						<br />
						<br />
						<Button variant="primary" onClick={handleShow}>
							Add new collection
						</Button>
						<AddCollection show={show} handleClose={handleClose} />
						<br />
						<br />
						<br />
						<br />
						<br />
						<CreateOutfitBtn />
					</Col>
					<Col sm={true}>
						<div className="main-container">
							<CarouselClothing selectedItems={selectedItems} />
						</div>
					</Col>
				</Row>
			</Container>
		</>
	);
};
