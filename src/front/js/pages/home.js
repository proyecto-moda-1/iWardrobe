import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid">
			<div className="row">
				<div className="col-4">
					<img
						src="https://image.freepik.com/vector-gratis/mujer-joven-ordenador-portatil-escritorio-trabajando-linea-ilustracion_24877-69119.jpg"
						className="w3-opacity float-start"
						alt=""
					/>
				</div>
				<div className="col-5">
					<h1 className="text">MODA es lo que compras,</h1>
					<h1 className="text">ESTILO es lo que haces con eso.</h1>
					<h1 className="text">NO lo dejes para ultima hora.</h1>
				</div>
				<div className="col-3 ">
					<a href="/register" className="btn">
						Register
					</a>
					<a href="/login" className="btn">
						Login
					</a>
				</div>
			</div>
			<div className="row">
				<div className="col">
					<h2>
						<i className="far fa-check-square" />
						Dé rienda suelta a su creatividad
					</h2>
					<p>Queremos ayudarte a explorar tu creatividad a la hora de vestir</p>
					<h2>
						<i className="far fa-check-square" />
						Organiza tu armario
					</h2>
					<p>Saques el mayor provecho de tu ropa, incluso de la que tienes olvidada en tu closet</p>
					<h2>
						<i className="far fa-check-square" />
						Rapidez en tu dia
					</h2>
					<p>A la hora de vestir selecciona lo que quieres en un click</p>
				</div>
				<div className="col">
					<h2>
						<i className="far fa-check-square" />
						Divide y venceras{" "}
					</h2>
					<p>Puedas programar cual es tu estilo según la ocasión. Separa por carpetas tus outfit</p>
					<h2>
						<i className="far fa-check-square" />
						Adaptado a ti{" "}
					</h2>
					<p>Tendrás tu cesta de ropa sucia en tiempo real.</p>
					<h2>
						<i className="far fa-check-square" />
						Atrévete a jugar{" "}
					</h2>
					<p>Queremos retarte a pisar la Noria y que nos dejes escoger tu combinación</p>
				</div>
			</div>
		</div>
	);
};
