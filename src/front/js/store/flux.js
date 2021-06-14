const getState = ({ getStore, setState, getActions }) => {
	return {
		store: {
			message: null,
			clothing: []
		},
		actions: {
			createClothing: data => {
				const store = getStore();
				const endpoint = process.env.BACKEND_URL + "/api/clothing";
				const config = {
					method: "POST",
					body: JSON.stringify({
						user_id: 1,
						name: data.name,
						category: data.category,
						image:
							"https://th.bing.com/th/id/R9e6e1694bdbb9d0148c1d5d451b7169b?rik=A70S6pmmXpjrGA&pid=ImgRaw"
					}),
					headers: { "Content-Type": "application/json" }
				};

				fetch(endpoint, config)
					.then(response => {
						setName("");
						setImage("");
						setCategory("");
						return response.json();
					})
					.then(json => console.log(json))
					.catch(err => console.error(err));
			}
		}
	};
};
export default getState;
