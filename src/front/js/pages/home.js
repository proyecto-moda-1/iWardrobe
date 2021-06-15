import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import Form from "react-bootstrap/Form";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<Form.Control size="sm" as="select" className="select-clothing" value="">
				<option value="0">Avalaible Clothing</option>
				<option value="top">Top</option>
				<option value="bottom">Bottom</option>
				<option value="footwear"> Footwear</option>
			</Form.Control>
			<Form.Control size="sm" as="select" className="select-clothing" value="">
				<option value="0">Add Collection</option>
				<option value="top">Favourites</option>
				<option value="bottom">Work</option>
				<option value="footwear"> Weekends</option>
			</Form.Control>
		</>
	);
};
