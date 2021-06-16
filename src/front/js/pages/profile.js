import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import { Card } from "../component/card.js";

// import "../../styles/profile.scss";

// export const Profile = () => {
// 	const [planets, setPlanets] = useState();

// 	useEffect(() => {
// 		fetch("https://www.swapi.tech/api/planets")
// 			.then(response => response.json())
// 			.then(data => setPlanets(data.results));
// 		// .catch(err => console.error(err));
// 	}, []);

// 	let planetCards = [];
// 	if (planets) {
// 		planetCards = planets.map((planet, key) => {
// 			return <Card name={planet.name} uid={planet.uid} url={planet.url} key={key} />;
// 		});
// 	}

// 	const [people, setPeople] = useState();

// 	useEffect(() => {
// 		fetch("https://www.swapi.tech/api/people")
// 			.then(response => response.json())
// 			.then(data => setPeople(data.results));
// 		// .catch(err => console.error(err));
// 	}, []);

// 	let peopleCards = [];
// 	if (people) {
// 		peopleCards = people.map((people, key) => {
// 			return <Card name={people.name} uid={people.uid} url={people.url} key={key} />;
// 		});
// 	}
// 	const [vehicles, setVehicles] = useState();

// 	useEffect(() => {
// 		fetch("https://www.swapi.tech/api/vehicles")
// 			.then(response => response.json())
// 			.then(data => setVehicles(data.results));
// 		// .catch(err => console.error(err));
// 	}, []);

// 	let vehiclesCards = [];
// 	if (vehicles) {
// 		vehiclesCards = vehicles.map((vehicles, key) => {
// 			return <Card name={vehicles.name} uid={vehicles.uid} url={vehicles.url} key={key} />;
// 		});
// 	}

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
// 			</div>
// 			<h1 className="text-warning"> Characters</h1>
// 			<div className="planet d-flex flex-row">{planetCards}</div>
// 			<h1 className="text-warning">Planets</h1>
// 			<div className="people d-flex flex-row">{peopleCards}</div>
// 			<h1 className="text-warning">People</h1>
// 			<div className="vehicles d-flex flex-row">{vehiclesCards}</div>
// 			<h1 className="text-warning">Vehicles</h1>
// 		</div>
// 	);
// };
