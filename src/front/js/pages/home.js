import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid">
			<div className="jumbotron text-justify bg-cover">
				<img src="https://economiasustentable.com/wp-content/uploads/2020/01/ropa.png" alt="" />
				<div className="container-fluid">
					<h1 className="texto-1">
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
			<div className="row">
				<div className="col">
					<h2>Dé rienda suelta a su creatividad</h2>
					<p>Queremos ayudarte a explorar tu creatividad a la hora de vestir</p>
					<h2>Organiza tu armario</h2>
					<p>Saques el mayor provecho de tu ropa, incluso de la que tienes olvidada en tu closet</p>
					<h2>Rapidez en tu dia</h2>
					<p>A la hora de vestir selecciona lo que quieres en un click</p>
				</div>
				<div className="col">
					<h2>Divide y venceras </h2>
					<p>Puedas programar cual es tu estilo según la ocasión. Separa por carpetas tus outfit</p>
					<h2>Adaptado a ti </h2>
					<p>Tendrás tu cesta de ropa sucia en tiempo real.</p>
					<h2>Atrévete a jugar </h2>
					<p>Queremos retarte a pisar la Noria y que nos dejes escoger tu combinación</p>
				</div>
			</div>
		</div>
	);
};
