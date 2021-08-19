import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid">
			<div className="jumbotron text-justify bg-cover">
				<img
					className="princ"
					src="https://economiasustentable.com/wp-content/uploads/2020/01/ropa.png"
					alt="imgFond"
				/>
				<div className="container-fluid">
					<h1 className="slogan">
						MODA es lo que compras, ESTILO es lo que haces con eso. NO lo dejes para ultima hora.
					</h1>

					<a href="/register" className="btn1">
						Register
					</a>
					<a href="/login" className="btn2">
						Login
					</a>
				</div>
			</div>
			{/* <div className="row">
				<div className="col">
					<h2 className="tittle1">Vini, vidi, vinci</h2>
					<p className="textBody">
						Take out your best Monicas organization skills with separating and putting everything in
						collections, outfits for that party with your friends.
					</p>
				</div>
				<div className="col">
					<h2 className="tittle1">Be creative</h2>
					<p className="textBody">
						Inspire others with your fearless fashion sense: do something that Rihanna could be proud of
					</p>
				</div>
			</div> */}
		</div>
	);
};
