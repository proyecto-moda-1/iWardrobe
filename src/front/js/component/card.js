import React, { useContext, useState, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import SelectOutfitBtn from "./outfitCheck";
import BtnCleanOutfit from "./btnCleanOutfit";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";
import "../../styles/card.scss";

const Card = props => {
	// const [favorite, setFavorite] = useState("");

	const { store, actions } = useContext(Context);

	function handleFavorite(id) {
		actions.favoriteBrand(id);
	}

	let clothingCards = [];
	if (props.clothing != undefined) {
		clothingCards = props.clothing.map((clothing, index) => {
			return (
				<div key={index} className="cardClothing">
					<div className="cardBodyClothing">
						<h5 className="cardNameClothing">{clothing.name}</h5>
						<img className="cardClothingImg" src={clothing.image} />
						<h4 className="cardClean">
							{clothing.clean ? "limpio" : "sucio"}{" "}
							<BtnCleanOutfit
								name={clothing.name}
								image={clothing.image}
								clothing={clothing.clean}
								key={index}
							/>
						</h4>
					</div>
				</div>
			);
		});
	}

	return (
		<div className="cardOutfit">
			<div className="cardCollections">{props.collections}</div>
			<div className="cardBodyOutfit text-secondary">
				<h5 className="cardTittleOutfit">OUTFIT: {props.name}</h5>
				<h5 className="cardClothingImg">{clothingCards}</h5>
				<div className="cardFooter">
					<button className="btnFav btn-outline-danger" onClick={handleFavorite.bind(this, props.id)}>
						♡
					</button>
				</div>
			</div>
			<SelectOutfitBtn id="outfitCheck" />
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
