const getState = ({ getStore, setState, getActions }) => {
	return {
		store: {
            top: [],
            bottom: [],
            footwear: []
		},
		actions: {
			getTop: data => {
				const store = getStore();
				const endpoint = process.env.BACKEND_URL + "/api/category";
				const config = {
					method: "GET",
					body: JSON.stringify({
                        top: data.top,
                        bottom: data.bottom,
                        footwear: data.footwear
					}),
					headers: {
						"Content-Type": "application/json",
						"Access-Control-Allow-Origin": "*"
					}
				};

				fetch(endpoint, config)
					.then(response => response.json())
					.then(data => console.log(json))
					.catch(err => console.error(err));
			}
		}
	};
};
export default getState;
