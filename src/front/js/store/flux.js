const getState = ({ getStore, getActions, setState }) => {
	return {
		store: {
			message: null,
			user: []
		},
		actions: {
			createUser: (data, callback) => {
				// const store = getStore();
				const endpoint = process.env.BACKEND_URL + "/api/user";
				const config = {
					method: "POST",
					body: JSON.stringify({
						nickname: data.nickname,
						gender: data.gender,
						email: data.email,
						password: data.password,
						image: data.image
					}),
					headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }
				};

				fetch(endpoint, config)
					.then(response => {
						return response.json();
					})
					.then(json => {
						setStore({ user: json });
						callback();
					})
					.catch(error => {});
			},

			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: () => {
				// fetching data from the backend
				fetch(process.env.BACKEND_URL + "/api/hello")
					.then(resp => resp.json())
					.then(data => setStore({ message: data.message }));
				// .catch(error => console.log("Error loading message from backend", error));
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
