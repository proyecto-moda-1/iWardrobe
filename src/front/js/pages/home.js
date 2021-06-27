import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid">
			<div className="row justify-content-md-center">
				<div className="col rounded float-star">
					<img
						src="https://image.freepik.com/vector-gratis/mujer-joven-ordenador-portatil-escritorio-trabajando-linea-ilustracion_24877-69119.jpg"
						className="rounded float-start"
						alt=""
					/>
				</div>
				<div className="col">
					<p className="col-md-auto">
						MODA Es lo que compras. ESTILO es lo que haces con eso. No lo dejes para ultima hora.
					</p>
				</div>
				<div className="col btn-group-vertical">
					<a href="/register" className="btn-secondary btn-lg btn-block">
						Register
					</a>
					<a href="/login" className="btn-secondary btn-lg btn-block">
						Login
					</a>
				</div>
			</div>
			<div className="col">
				<p className="tittleInit"></p>
			</div>
			<div className="container-intro">
				<div className="row">
					<div className="col">
						<h2>
							<i className="far fa-check-square" /> Be creative
						</h2>
						<p>
							Inspire others with your fearless fashion sense: do something that Rihanna could be proud
							of.
						</p>
						<h2>
							<i className="far fa-check-square" />
							Vini vidi vinci
						</h2>
						<p>
							Take out your best Monicas organization skills with separating and putting everything in
							collections, outfits for that party with your friends.
						</p>
						<h2>
							<i className="far fa-check-square" />
							Random noria
						</h2>
						<p>
							Our random noria feauture will give you a look going from Desigual to the last Versace look.
							You will never know but that&apos;s the fun of it!
						</p>
					</div>
					<div className="col">
						<h2>
							<i className="far fa-check-square" />
						</h2>
						<p></p>
					</div>
				</div>

				<div className="col">
					<div className="image">
						<img
							src="https://i.pinimg.com/564x/4d/69/d8/4d69d8775d8366e419db519840beee8d.jpg"
							className="rounded float-left"
							alt="..."
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
