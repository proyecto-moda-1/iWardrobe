import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="containerHome">
			<div className="jumbotron text-justify bg-cover">
				<img
					className="imgHome"
					src="https://economiasustentable.com/wp-content/uploads/2020/01/ropa.png"
					alt="imgFond"
				/>
				<div className="container-fluid">
					<h1 className="tittleHome">
						MODA es lo que compras, ESTILO es lo que haces con eso. NO lo dejes para ultima hora.
					</h1>
					<div className="infoHome">
						<h3>
							Llego la hora de organizar tu ropa, sacar el mejor provecho a lo que tenemos en casa,
							tomarnos el tiempo de crear outfits que se adapten a tu vida cotidiana y por supuesto a
							eventos especiales.
						</h3>
					</div>

					<a href="/register" className="btnRegisterHome">
						REGISTER
					</a>
					<a href="/login" className="btnLoginHome">
						LOGIN
					</a>
				</div>
			</div>
		</div>
	);
};
