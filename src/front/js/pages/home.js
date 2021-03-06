import React, { useContext } from "react";
import { Context } from "../store/appContext";
// import People1 from "../../img/people1.jpg";

import "../../styles/home.scss";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="containerHome">
			<div className="jumbotronHome text-justify bg-cover">
				{/* <img className="imgHome1" src={People1} /> */}

				<img
					className="imgHome2"
					src="https://economiasustentable.com/wp-content/uploads/2020/01/ropa.png"
					alt="imgFond"
				/>
				<div className="container-fluid">
					<h1 className="logoHome1">iWardrobe</h1>
					<h1 className="tittleHome">You either know fashion or you don`t. - Anna Wintour.</h1>
					{/* <div className="infoHome">
						<p>
							Llego la hora de organizar tu ropa, sacar el mejor provecho a lo que tenemos en casa,
							tomarnos el tiempo de crear outfits que se adapten a tu vida cotidiana y por supuesto a
							eventos especiales.
						</p>
					</div> */}
					<div className="btnHome">
						<a href="/register" className="btnRegisterHome type4">
							REGISTER
						</a>
						<a href="/login" className="btnLoginHome type4">
							LOGIN
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};
