import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid">
			<div className="row justify-content-md-center">
				<div className="col">
					<img
						src="https://image.freepik.com/foto-gratis/mujer-joven-arrojando-ropa-walk-in-closet-lio-armario-vestidor_130111-320.jpg"
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
			<div className="row">
				<div className="col">
					<div className="jumbotron jumbotron-fluid">
						<h2 className="font-light counter m-b-0">
							<i className="fa fa-coffee" /> Build Confidence
						</h2>
						<h3>
							Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem
							Ipsum
						</h3>

						<h2 className="font-light counter m-b-0">
							<i className="fa fa-coffee" /> Build Confidence
						</h2>
						<h3>
							Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem
							Ipsum
						</h3>
					</div>
				</div>
				<div className="col">
					<div className="jumbotron jumbotron-fluid">
						<h2 className="font-light counter m-b-0">
							<i className="fa fa-coffee" /> Build Confidence
						</h2>
						<h3>
							Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem
							Ipsum
						</h3>

						<h2 className="font-light counter m-b-0">
							<i className="fa fa-coffee" /> Build Confidence
						</h2>
						<h3>
							Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem
							Ipsum
						</h3>
					</div>
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
	);
};
