const getState = ({ getStore, setState, getActions }) => {
	return {
		store: {
			category: [],
			top: [],
			bottom: [],
			footwear: []
		},
		actions: {
			getClothing: data => {
				const store = getStore();
				const endpoint = process.env.BACKEND_URL + "/api/clothing?category=" + category;
				const config = {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				};

				fetch(endpoint, config)
					.then(response => response.json())
					.then(data => {
						console.log(data)	
					})
					.catch(err => console.error(err));
			}

			// 	getBottom: data => {
			// 		const store = getStore();
			// 		const endpoint = process.env.BACKEND_URL + "/api/clothing?category=bottom";
			// 		const config = {
			// 			method: "GET",
			// 			headers: {
			// 				"Content-Type": "application/json",
			// 				"Access-Control-Allow-Origin": "*"
			// 			}
			// 		};

			// 		fetch(endpoint, config)
			// 			.then(response => response.json())
			// 			.then(data => console.log(data))
			// 			.then(data => {
			// 				setStore({
			// 					bottom: data.bottom
			// 				});
			// 				callback();
			// 			})
			// 			.catch(err => console.error(err));
			// 	},

			// 	getFootwear: data => {
			// 		const store = getStore();
			// 		const endpoint = process.env.BACKEND_URL + "/api/clothing?category=footwear";
			// 		const config = {
			// 			method: "GET",
			// 			headers: {
			// 				"Content-Type": "application/json",
			// 				"Access-Control-Allow-Origin": "*"
			// 			}
			// 		};

			// 		fetch(endpoint, config)
			// 			.then(response => response.json())
			// 			.then(data => console.log(data))
			// 			.then(data => {
			// 				setStore({
			// 					footwear: footwear
			// 				});
			// 				callback();
			// 			})
			// 			.catch(err => console.error(err));
			// 	}
		}
	};
};
export default getState;
