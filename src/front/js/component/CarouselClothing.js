import React, { Component, useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { getActions } from "../store/flux.js";
import PropTypes from "prop-types";
import "../../styles/carouselClothing.scss";

const CarouselClothing = props => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<div className="mainContainer">
				<div className="topContainer d-block">
					{" "}
					<div className="box">
						<img
							src={props.selectedItems.top ? props.selectedItems.top.image : ""}
							className="topImgCarousel"
						/>
					</div>
				</div>

				<div className="bottomContainer">
					<img
						src={props.selectedItems.bottom ? props.selectedItems.bottom.image : ""}
						className="topImgCarousel"
					/>
				</div>

				<div className="footwearContainer">
					<img
						src={props.selectedItems.footwear ? props.selectedItems.footwear.image : ""}
						className="topImgCarousel "
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
