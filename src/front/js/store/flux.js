const getState = ({ getStore, setState, getActions }) => {
	return {
		store: {
			top: [],
			bottom: [],
			footwear: []
		},
		actions: {
			getClothing() {
				const store = getStore();
				const endpoint = process.env.BACKEND_URL + "/api/clothing?category=top";
				const config = {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				};

				fetch(endpoint, config)
					.then(response => response.json())
					.then(data => {
						setStore({ top: data });
					})
					.catch(err => console.error(err));
			},

			getBottom() {
				const store = getStore();
				const endpoint = process.env.BACKEND_URL + "/api/clothing?category=bottom";
				const config = {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						"Access-Control-Allow-Origin": "*"
					}
				};

				fetch(endpoint, config)
					.then(response => response.json())
					.then(data => console.log(data))
					// .then(data => {
					// 	setStore({
					// 		bottom: data.bottom
					// 	});
					//
					// })
					.catch(err => console.error(err));
			},

			getFootwear() {
				const store = getStore();
				const endpoint = process.env.BACKEND_URL + "/api/clothing?category=footwear";
				const config = {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				};

				fetch(endpoint, config)
					.then(response => response.json())
					.then(data => console.log(data))
					// .then(data => {
					// 	// setStore({
					// 	// 	footwear: footwear
					// 	// });
					// 	// callback();
					// })
					.catch(err => console.error(err));
			}
		}
	};
};
export default getState;
