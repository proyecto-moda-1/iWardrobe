import React, { useContext, useState, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import SelectOutfitBtn from "./outfitCheck";
import BtnCleanOutfit from "./btnCleanOutfit";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";
import "../../styles/card.scss";
import HeartBtn from "./heartBtn";
//create your first component
const Card = props => {
	const [favorite, setFavorite] = useState("");

	const { store, actions } = useContext(Context);

	const handleFavorite = () => {
		const data = new FormData();
		data.append("user_id", 1);
		data.append("favorite", favorite);
		const callback = () => {
			setFavorite("");
		};

		actions.favoriteBrand(data, callback);
	};

	// console.log({ props });

	// useEffect(() => {
	// 	actions.getUserFavorite(data);
	// }, []);
	// let SelectOutfitBtn = [];
	// useEffect(() => {
	// 	actions.getUserFavorite(data);
	// }, []);
	let clothingCards = [];
	if (props.clothing != undefined) {
		clothingCards = props.clothing.map((clothing, index) => {
			return (
				<div key={index} className="cardClothing">
					<div className="cardBody">
						<h5 className="cardName">{clothing.name}</h5>
						<a className="cardImg">{clothing.image}</a>
						<h4 className="cardClean">
							{clothing.clean ? "limpio" : "sucio"} <BtnCleanOutfit />
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
				<a className="card-title">{props.image}</a>
				<h5 className="card-title">{clothingCards}</h5>
				<div className="cardInfo">
					<button className="btn-fav btn-outline-danger" onClick={handleFavorite}>
						♡
					</button>
					<BtnCleanOutfit />
				</div>
			</div>
		</div>
	);
};

export default Card;

Card.propTypes = {
	collections: PropTypes.string,
	name: PropTypes.string,
	clothing: PropTypes.array,
	image: PropTypes.string,
	favorite: PropTypes.string
};
