import React, { Component, useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { getActions } from "../store/flux.js";
import PropTypes from "prop-types";

const CarouselClothing = props => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<div className="main-container">
				<div className="top-container mx-auto d-block">
					{" "}
					<img
						src={props.selectedItems.top ? props.selectedItems.top.image : ""}
						className=" mx-auto d-block"
					/>
				</div>

				<div className="bottom-container">
					<img
						src={props.selectedItems.bottom ? props.selectedItems.bottom.image : ""}
						className=" mx-auto d-block"
					/>
				</div>

				<div className="footwear-container">
					<img
						src={props.selectedItems.footwear ? props.selectedItems.footwear.image : ""}
						className=" mx-auto d-block "
					/>
				</div>
			</div>
		</>
	);
};
export default CarouselClothing;

CarouselClothing.propTypes = {
	selectedItems: PropTypes.object
};
