const getState = ({ getStore, setState, getActions }) => {
	return {
		store: {
			message: null,
            top: [],
            bottom:[],
            footwear:[],

		},
		actions: {
			getClothing: data => {
				const store = getStore();
				const endpoint = process.env.BACKEND_URL + "/api/clothing";
				const config = {
					method: "GET",
					body: JSON.stringify(),
					headers: {
						"Content-Type": "application/json",
						"Access-Control-Allow-Origin": "*"
					}
				};

				fetch(endpoint, config)
					.then(response => {
						return response.json();
					})
					.then(json => console.log(json))
					.catch(err => console.error(err));
			}
		}
	};
};
export default getState;
