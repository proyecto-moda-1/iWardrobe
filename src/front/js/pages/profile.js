import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/profile.scss";
import { Card } from "../component/card.js";

export const Profile = () => {
	const [planets, setPlanets] = useState();

	useEffect(() => {
		fetch("https://www.swapi.tech/api/planets")
			.then(response => response.json())
			.then(data => setPlanets(data.results));
		// .catch(err => console.error(err));
	}, []);

	let planetCards = [];
	if (planets) {
		planetCards = planets.map((planet, key) => {
			return <Card name={planet.name} uid={planet.uid} url={planet.url} key={key} />;
		});
	}

	const [people, setPeople] = useState();

	useEffect(() => {
		fetch("https://www.swapi.tech/api/people")
			.then(response => response.json())
			.then(data => setPeople(data.results));
		// .catch(err => console.error(err));
	}, []);

	let peopleCards = [];
	if (people) {
		peopleCards = people.map((people, key) => {
			return <Card name={people.name} uid={people.uid} url={people.url} key={key} />;
		});
	}
	const [vehicles, setVehicles] = useState();

	useEffect(() => {
		fetch("https://www.swapi.tech/api/vehicles")
			.then(response => response.json())
			.then(data => setVehicles(data.results));
		// .catch(err => console.error(err));
	}, []);

	let vehiclesCards = [];
	if (vehicles) {
		vehiclesCards = vehicles.map((vehicles, key) => {
			return <Card name={vehicles.name} uid={vehicles.uid} url={vehicles.url} key={key} />;
		});
	}

	return (
		<div className="home">
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
				</div>
			</div>
			<h1 className="text-warning"> Characters</h1>
			<div className="planet d-flex flex-row">{planetCards}</div>
			<h1 className="text-warning">Planets</h1>
			<div className="people d-flex flex-row">{peopleCards}</div>
			<h1 className="text-warning">People</h1>
			<div className="vehicles d-flex flex-row">{vehiclesCards}</div>
			<h1 className="text-warning">Vehicles</h1>
		</div>
	);
};

// export const Home = () => {
// 	const { store, actions } = useContext(Context);

// 	return (
// 		<div className="container-fluid">
// 			<div className="row justify-content-md-center">
// 				<div className="col">
// 					<img
// 						src="https://image.freepik.com/foto-gratis/mujer-joven-arrojando-ropa-walk-in-closet-lio-armario-vestidor_130111-320.jpg"
// 						className="rounded float-start"
// 						alt=""
// 					/>
// 				</div>
// 				<div className="col">
// 					<p className="col-md-auto">
// 						MODA Es lo que compras. ESTILO es lo que haces con eso. No lo dejes para ultima hora.
// 					</p>
// 				</div>
// 				<div className="col btn-group-vertical">
// 					<a href="/register" className="btn-secondary btn-lg btn-block">
// 						Register
// 					</a>
// 					<a href="/login" className="btn-secondary btn-lg btn-block">
// 						Login
// 					</a>
// 				</div>
// 			</div>
// 			<div className="row">
// 				<div className="col">
// 					<div className="jumbotron jumbotron-fluid">
// 						<h2 className="font-light counter m-b-0">
// 							<i className="fa fa-coffee" /> Build Confidence
// 						</h2>
// 						<h3>
// 							Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem
// 							Ipsum
// 						</h3>

// 						<h2 className="font-light counter m-b-0">
// 							<i className="fa fa-coffee" /> Build Confidence
// 						</h2>
// 						<h3>
// 							Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem
// 							Ipsum
// 						</h3>
// 					</div>
// 				</div>
// 				<div className="col">
// 					<div className="jumbotron jumbotron-fluid">
// 						<h2 className="font-light counter m-b-0">
// 							<i className="fa fa-coffee" /> Build Confidence
// 						</h2>
// 						<h3>
// 							Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem
// 							Ipsum
// 						</h3>

// 						<h2 className="font-light counter m-b-0">
// 							<i className="fa fa-coffee" /> Build Confidence
// 						</h2>
// 						<h3>
// 							Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem
// 							Ipsum
// 						</h3>
// 					</div>
// 				</div>
// 			</div>
// 			<div className="col">
// 				<div className="image">
// 					<img
// 						src="https://i.pinimg.com/564x/4d/69/d8/4d69d8775d8366e419db519840beee8d.jpg"
// 						className="rounded float-left"
// 						alt="..."
// 					/>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };
