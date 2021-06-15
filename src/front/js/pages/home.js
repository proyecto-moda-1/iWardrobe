import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import Form from "react-bootstrap/Form";
import DropdownButton from "react-bootstrap/DropdownButton";
import SplitButton from "react-bootstrap/SplitButton";
import Dropdown from "react-bootstrap/Dropdown";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";

export const Home = () => {
	const { store, actions } = useContext(Context);

	// const { show, handleClose } = props;
	// const [name, setName] = useState("");
	// const [image, setImage] = useState("");
	// const [category, setCategory] = useState("");
	// const { store, actions } = useContext(Context);

	// const handleSubmit = () => {
	// 	const data = {
	// 		user_id: 1,
	// 		name: name,
	// 		image: image,
	// 		category: category
	// 	};
	// 	actions.createClothing(data);
	// };

	return (
		<>
			<DropdownButton id="dropdown-basic-button" title="Clothing Avalaible">
				<Dropdown.Item href="#/action-1">Top</Dropdown.Item>
				<Dropdown.Item href="#/action-2">Bottom</Dropdown.Item>
				<Dropdown.Item href="#/action-3"> Footwear</Dropdown.Item>
			</DropdownButton>

			<DropdownButton id="dropdown-basic-button" title=" Add Collection">
				<Dropdown.Item href="#/action-1">Favorites</Dropdown.Item>
				<Dropdown.Item href="#/action-2">Weekends</Dropdown.Item>
				<Dropdown.Item href="#/action-3">Work</Dropdown.Item>
			</DropdownButton>
		</>
	);
};
