import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { getActions } from "../store/flux.js";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../styles/home.scss";

export const RandomWheel = () => {
	return (
		<>
			<Container>
				<Row>
					<Col sm={true}>
						<div className="random-container">
							<button className="btn">Button</button>
						</div>
					</Col>
				</Row>
			</Container>
		</>
	);
};
export default RandomWheel;
