import React, { useContext, useState, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import SelectOutfitBtn from "./selectOutfitBtn";
import BtnCleanOutfit from "./btnCleanOutfit";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";
import "../../styles/card.scss";

const ClothingCard = props => {
	const { store, actions } = useContext(Context);
	return (
		<div className="cardClothing">
			<div className="cardBodyClothing">
				<h5 className="cardNameClothing">{props.name}</h5>
				<img className="cardClothingImg" src={props.image} />
				<h4 className="cardClean">
					<BtnCleanOutfit id={props.id} dirty={props.dirty} />
				</h4>
			</div>
		</div>
	);
};

export default ClothingCard;

ClothingCard.propTypes = {
	id: PropTypes.int,
	name: PropTypes.string,
	image: PropTypes.string,
	dirty: PropTypes.bool
};