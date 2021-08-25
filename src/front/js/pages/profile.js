import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Card } from "../component/card.js";
import { getActions } from "../store/flux.js";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import LoadClothing from "../component/loadClothing";

import PropTypes from "prop-types";

import "../../styles/profile.scss";

export const Profile = () => {
	const { store, actions } = useContext(Context);
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	useEffect(() => {
		actions.getAllOutfit();
	}, []);

	let outfitCards = [];
	let dirtyClothing = [];
	if (store.outfits != undefined) {
		dirtyClothing = store.outfits
			.filter(outfit => outfit.clothing.some(clo => !clo.clean))
			.map((outfit, index) => {
				return (
					<Card
						name={outfit.name}
						collections={outfit.collections}
						image={outfit.image}
						clothing={outfit.clothing}
						favorite={outfit.favorite}
						key={index}
					/>
				);
			});
		outfitCards = store.outfits
			.filter(outfit => outfit.clothing.every(clo => clo.clean))
			.map((outfit, index) => {
				return (
					<Card
						name={outfit.name}
						collections={outfit.collections}
						image={outfit.image}
						clothing={outfit.clothing}
						favorite={outfit.favorite}
						key={index}
					/>
				);
			});
	}

	return (
		<div className="Body">
			<div className="Jumbotrom">
				<div className="row">
					<div className="col">
						<Button className="btnProfile" onClick={handleShow}>
							Add clothes
						</Button>
						<LoadClothing show={show} handleClose={handleClose} />
						<p className="textBody">Tomale una foto a tu ropa y subela a tu perfil </p>
					</div>
					<div className="col">
						<Link to="/closet">
							<button className="btnProfile" href="#">
								Add Collection
							</button>
						</Link>
						<p className="textBody">Crea colecciones segun tus necesidades diarias y especiales</p>
					</div>
				</div>
				<div className="row">
					<div className="col">
						<Link to="/myOutfit">
							<button className="btnProfile" href="#">
								Create Outfit
							</button>
						</Link>

						<p className="textBody">crea tus outfit diarios y guardalos para cuando necesites usarlo </p>
					</div>
					<div className="col">
						<Link to="/closet">
							<button className="btnProfile" href="#">
								Closet
							</button>
						</Link>
						<p className="textBody">
							Puedes marcar tus piezas sucias y solo mostraremos los outfits que esten limpios
						</p>
					</div>
				</div>
			</div>
			{/* <div className="container">
					<img
						className="ProfileImg"
						src="https://i.pinimg.com/originals/e1/2c/9a/e12c9a6fae995ea792910a8dff4689e7.png"
						alt="imgFond"
					/>
					<h1 className="Tittle1">Welcome!</h1>
					<h3 className="text2"></h3>
				</div> */}
			<div className="container">
				<div className="row">
					<h1 className="textOufit"> OUTFITS AVAILABLES</h1>
					<div className="favorite d-flex flex-row">{outfitCards}</div>
				</div>
				<div className="row">
					<h1 className="textDirty"> ALREADY USED </h1>
					<div className="dirty d-flex flex-row">{dirtyClothing}</div>
				</div>
			</div>
		</div>
	);
};
