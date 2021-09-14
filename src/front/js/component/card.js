import React, { useContext, useState, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import SelectOutfitBtn from "./selectOutfitBtn";
import BtnCleanOutfit from "./btnCleanOutfit";
import ClothingCard from "./clothing";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";
import "../../styles/card.scss";

//Hay un error que da en la consola sobre el id del card, hay que mirar eso
const Card = props => {
	const [favorite, setFavorite] = useState("");
	const { store, actions } = useContext(Context);
	// console.log(favoriteId);
	// const { favoriteId } = useParams();
	//Para recuperar el id de favoritos, debemos recuperarlo desde la url con useParams.
	function handleFavorite(id) {
		actions.favoriteBrand(id);
	}
	let clothingCards = [];
	if (props.clothing != undefined) {
		clothingCards = props.clothing.map((clothing, index) => {
			return (
				<ClothingCard
					name={clothing.name}
					image={clothing.image}
					dirty={clothing.dirty}
					key={index}
					id={clothing.id}
				/>
			);
		});
	}
	return (
		<div className="cardOutfit">
			<div className="cardCollections">{props.collections}</div>
			<div className="cardBodyOutfit text-secondary">
				<h5 className="cardTittleOutfit ">{props.name}</h5>
				<div className="cardClothingImg d-flex flex-row">{clothingCards}</div>
				<div className="cardFooter">
					<button
						className="btnFav btn-outline-danger"
						checked={favorite}
						onClick={handleFavorite.bind(this, props.id)}>
						♡
					</button>{" "}
					<SelectOutfitBtn id={props.id} today={props.today} />
				</div>
			</div>
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
	today: PropTypes.bool,
	dirty: PropTypes.bool,
	favorite: PropTypes.bool
};
