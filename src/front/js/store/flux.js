const getState = ({ getStore, setStore, getActions }) => {
	return {
		store: {
			top: [],
			bottom: [],
			footwear: []
		},
		actions: {
			getClothing(category) {
				const endpoint = `${process.env.BACKEND_URL}/api/clothing?category=${category}`;
				const config = {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				};

				fetch(endpoint, config)
					.then(response => response.json())
					.then(data => {
						console.log(data);
						setStore({ [category]: data });
					})
					.catch(err => console.error(err));
			}
		}
	};
};
export default getState;
