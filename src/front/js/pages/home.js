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
				<p className="tittleInit">
					MODA Es lo que compras. ESTILO es lo que haces con eso. No lo dejes para ultima hora.
				</p>
			</div>
			<div className="container-intro">
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
