import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import Card from "../component/card.js";
import { getActions } from "../store/flux.js";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import LoadClothing from "../component/loadClothing";

import "../../styles/profile.scss";

export const Profile = () => {
	const { store, actions } = useContext(Context);
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	useEffect(() => {
		actions.getAllOutfit();
		actions.getLaundry();
	}, []);

	let outfitCards = [];
	let dirtyClothing = [];
	if (store.outfits != undefined) {
		dirtyClothing = store.outfits
			.filter(outfit => outfit.clothing.some(clo => clo.dirty))
			.map((outfit, index) => {
				return (
					<Card
						name={outfit.name}
						id={outfit.id}
						collections={outfit.collections}
						image={outfit.image}
						clothing={outfit.clothing}
						favorite={outfit.favorite}
						key={index}
					/>
				);
			});
		outfitCards = store.outfits
			.filter(outfit => outfit.clothing.every(clo => !clo.dirty))
			.map((outfit, index) => {
				return (
					<Card
						name={outfit.name}
						id={outfit.id}
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
		<div className="bodyProfile">
			<div className="JumbotromProfile">
				<img className="imgHome" src="/workspace/outfit-planner/src/front/img/picture1.png" />
				<div className="btnJumbotrom">
					<div className="btnGropOne">
						<div className="colProfile">
							<Button className="btnProfile" onClick={handleShow}>
								Add clothes
							</Button>
							<LoadClothing id="btnClothes" show={show} handleClose={handleClose} />
							<p className="textBody">
								Tomale una foto a tu ropa y subela a tu perfilPuedes marcar tus piezas sucias y solo
								mostraremos los outfits que esten limpios{" "}
							</p>
						</div>
						<div className="colProfile">
							<Link to="/closet">
								<button className="btnProfile" href="#">
									Add collection
								</button>
							</Link>
							<p className="textBody">
								Crea colecciones segun tus necesidades diarias y especialesPuedes marcar tus piezas
								sucias y solo mostraremos los outfits que esten limpios
							</p>
						</div>
					</div>
					<div className="btnGroptwo">
						<div className="colProfile">
							<Link to="/myOutfit">
								<button className="btnProfile" href="#">
									Create outfit
								</button>
							</Link>

							<p className="textBodyBottom">
								crea tus outfit diarios y guardalos para cuando necesites usarloPuedes marcar tus piezas
								sucias y solo mostraremos los outfits que esten limpios{" "}
							</p>
						</div>
						<div className="colProfile">
							<Link to="/closet">
								<button className="btnProfile" href="#">
									Closet
								</button>
							</Link>
							<p className="textBodyBottom">
								Puedes marcar tus piezas sucias y solo mostraremos los outfits que esten limpiosPuedes
								marcar tus piezas sucias y solo mostraremos los outfits que esten limpios
							</p>
						</div>
					</div>
				</div>
			</div>
			<h1 className="tittleAvaibles"> OUTFITS AVAILABLES</h1>
			<div className="containerAvailables">
				<div className="row">
					<div className="availablesCard d-flex flex-row">{outfitCards}</div>
				</div>
			</div>
			<h1 className="tittleDirty"> ALREADY USED </h1>
			<div className="containerDirtyS">
				<div className="row">
					{dirtyClothing}
					<div className="dirtyCard d-flex flex-row"></div>
				</div>
			</div>
		</div>
	);
};
