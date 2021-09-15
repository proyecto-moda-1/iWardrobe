import React, { useContext, useState, useEffect } from "react";
import CarouselClothing from "../component/CarouselClothing.js";
import CreateOutfitBtn from "../component/createOutfitBtn";
import AddCollection from "../component/addCollection.js";

import LoadClothing from "../component/loadClothing.js";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { Context } from "../store/appContext";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import "../../styles/myOutfit.scss";

export const MyOutfit = props => {
	const { store, actions } = useContext(Context);
	const [showCollection, setShowCollection] = useState(false);
	const handleCloseCollection = () => setShowCollection(false);
	const handleShowCollection = () => setShowCollection(true);
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
	const topItems = store.top
		? store.top.map(item => {
				return (
					<option key={item.id} value={item.id}>
						{item.name}
					</option>
				);
		  })
		: "";
	const bottomItems = store.bottom
		? store.bottom.map(item => {
				return (
					<option key={item.id} value={item.id}>
						{" "}
						{item.name}
					</option>
				);
		  })
		: "";
	const footwearItems = store.footwear
		? store.footwear.map(item => {
				return (
					<option key={item.id} value={item.id}>
						{" "}
						{item.name}
					</option>
				);
		  })
		: "";

	useEffect(() => {
		actions.getClothing("top");
		actions.getClothing("bottom");
		actions.getClothing("footwear");
	}, []);

	return (
		<>
			<div className="bodyOutfit1">
				<Container className="myOutfitContainer flex">
					<div className="containerClothing">
						<Col className="col-3">
							<h1 className="tittlePage">
								<b>Wardrobe</b>
							</h1>
							<Button className="btnLoad" onClick={handleShow}>
								Add clothes
							</Button>
							<LoadClothing show={show} handleClose={handleClose} />
							<Button className="btnAddCollection" onClick={handleShowCollection}>
								Add new collection
							</Button>
							<AddCollection show={showCollection} handleClose={handleCloseCollection} />
							<Form.Control
								size="sm"
								as="select"
								className="selectTop"
								defaultValue={top}
								onChange={event => {
									setTop(event.target.value);
									setselectedItems({
										...selectedItems,
										top: store.top.find(item => item.id == event.target.value)
									});
								}}>
								<option value="0">Top</option>
								{topItems}
							</Form.Control>
							<Form.Control
								size="sm"
								as="select"
								className="selectBottom"
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
							<Form.Control
								size="sm"
								as="select"
								className="selectFootwear"
								defaultValue={footwear}
								placeholder="password"
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
							<CreateOutfitBtn clothing={selectedItems} />
						</Col>
					</div>
					<Col className="carouselContainer col-4">
						<CarouselClothing selectedItems={selectedItems} />
					</Col>

					<Col className="containerInfoOutfit col-4">
						<div className="infoOutfit">
							<h2>
								<b>Como crear tu Outfit?</b>
							</h2>
							<p>
								1. Crea tu ropa en el botón <b>Add clothes</b>
							</p>
							<p>2. Juega con todas las piezas de ropa para que consigas la combinacion que te guste </p>
							<p>
								3. Crea tu outfit en el botón <b>Create your outfit</b>
							</p>
							<p>
								4. Puedes crear colecciones que desees pulsando <b>Add new collection</b> asi puedes
								clasificar mejor tus outfits, siendo mas facil luego conseguirlos.
							</p>
						</div>
						<Link to="/closet">
							<button className="btnClosetMyOutfit" href="#">
								Wardrobe
							</button>
						</Link>
					</Col>
				</Container>
			</div>
		</>
	);
};
