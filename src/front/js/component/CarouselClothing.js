import React, { Component, useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { getActions } from "../store/flux.js";
import PropTypes from "prop-types";

export const CarouselClothing = props => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<Container>
				<Row>
					<Col sm={true}>
						<div className="main-container">
							<div className="top-container">
								{" "}
								<img src={props.selectedItems.top.image} />
							</div>
							<br />
							<div className="bottom-container">
								<img src={props.selectedItems.bottom.image} />
							</div>
							<br />
							<div className="footwear-container">
								<img src={props.selectedItems.footwear.image} />
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		</>
	);
};

CarouselClothing.propTypes = {
	selectedItems: PropTypes.object
};
export default CarouselClothing;
