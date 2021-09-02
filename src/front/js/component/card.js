import React, { useContext, useState, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import SelectOutfitBtn from "./selectOutfitBtn";
import BtnCleanOutfit from "./btnCleanOutfit";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";
import "../../styles/card.scss";

const Card = props => {
	const [favorite, setFavorite] = useState("");

	const { store, actions } = useContext(Context);

	// function handleFavorite(id) {
	// 	actions.favoriteBrand(id);
	// }

	let clothingCards = [];
	if (props.clothing != undefined) {
		clothingCards = props.clothing.map((clothing, index) => {
			return (
				<div key={index} className="cardClothing">
					<div className="cardBody">
						<h5 className="cardName">{clothing.name}</h5>
						<img className="cardImg">{clothing.image}</img>
						<h4 className="cardClean">
							{clothing.clean ? "limpio" : "sucio"}{" "}
							{/* <BtnCleanOutfit
								name={clothing.name}
								image={clothing.image}
								clothing={clothing.clean}
								key={index}
							/> */}
						</h4>
					</div>
				</div>
			);
		});
	}

	return (
		<div className="cardOutfit">
			<div className="cardCollections">{props.collections}</div>
			<div className="card-body text-secondary">
				<h5 className="card-title">{props.name}</h5>
				<img className="card-title">{props.image}</img>
				<h5 className="card-title">{clothingCards}</h5>
				<div className="cardInfo">
					{/* <button className="btn-fav btn-outline-danger" onClick={handleFavorite(props.id)}>
						♡
					</button> */}
				</div>
			</div>
			{/* <BtnCleanOutfit />
			<SelectOutfitBtn id="outfitCheck" /> */}
		</div>
	);
};

export default Card;

Card.propTypes = {
	id: PropTypes.int,
	collections: PropTypes.string,
	name: PropTypes.string,
	clothing: PropTypes.array,
	outfit: PropTypes.array,
	image: PropTypes.string,
	favorite: PropTypes.bool
};
