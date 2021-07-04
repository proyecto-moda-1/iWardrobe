const getState = ({ getStore, getActions, setState, setStore }) => {
	const token = localStorage.getItem("token");
	return {
		store: {
			message: null,
			user: [],
			clothing: [],
			token: token,
			profile: [],
			clothing_items: [],
			collection_outfit: [],
			collections: [],
			name: [],
			top: [],
			bottom: [],
			footwear: []
		},
		actions: {
			createUser: (data, callback) => {
				// const store = getStore();
				const endpoint = process.env.BACKEND_URL + "/api/register";
				const config = {
					method: "POST",
					body: JSON.stringify({
						nickname: data.nickname,
						gender: data.gender,
						email: data.email,
						password: data.password,
						image: data.image,
						repeat_password: data.repeatPassword
					}),
					headers: {
						"Content-Type": "application/json",
						"Access-Control-Allow-Origin": "*"
					}
				};

				fetch(endpoint, config)
					.then(response => {
						return response.json();
					})

					.then(json => {
						setStore({
							user: json.user,
							token: json.token
						});
						callback();
					})
					.catch(error => {});
			},

			logIn: (data, callback) => {
				const store = getStore();
				const endpoint = process.env.BACKEND_URL + "/api/login";
				const config = {
					method: "POST",
					body: JSON.stringify({
						email: data.email,
						password: data.password
					}),
					headers: { "Content-Type": "application/json" }
				};

				fetch(endpoint, config)
					.then(response => {
						return response.json();
					})
					.then(json => {
						setStore({ token: json.token });
						localStorage.setItem("token", json.token);
						callback();
					})
					.catch(error => {});
			},

			logOut: () => {
				localStorage.removeItem("token");
				setStore({ token: null });
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
				"";
			},
			//get the store
			createClothing: data => {
				const store = getStore();
				const endpoint = process.env.BACKEND_URL + "/api/clothing";
				const config = {
					method: "POST",
					body: data,
					headers: {
						"Access-Control-Allow-Origin": "*",
						Authorization: `Bearer ${store.token}`
					}
				};
				fetch(endpoint, config)
					.then(response => response.json())
					// .then(json => console.log(json))
					.catch(err => console.error(err));
			},

			getAllOutfit: data => {
				const store = getStore();
				const endpoint = process.env.BACKEND_URL + "/api/users/outfits";
				const config = {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${store.token}`
					}
				};
				fetch(endpoint, config)
					.then(response => {
						if (!response.ok) {
							window.location.href = "/";
						}
						return response.json();
					})
					.then(json => {
						setStore({ outfits: json });
					});
			},

			favoriteBrand: data => {
				const store = getStore();
				const endpoint = process.env.BACKEND_URL + "/api/users/outfits/<outfit_id>/favorite";
				const config = {
					method: "PUT",
					body: JSON.stringify({
						favorite: data.favorite
					}),
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${store.token}`,
						"Access-Control-Allow-Origin": "*"
					}
				};
				fetch(endpoint, config)
					.then(response => {
						setFavorite("");
						return response.json();
					})
					.then(json => setFavorite(json.favorite))
					.catch(err => console.error(err));
			},

			getUserFavorite: data => {
				const store = getStore();
				const endpoint = process.env.BACKEND_URL + "/api/users/outfits/favorite";
				const config = {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${store.token}`
					}
				};
				fetch(endpoint, config)
					.then(response => {
						if (!response.ok) {
							window.location.href = "/";
						}
						return response.json();
					})
					.then(json => {
						setStore({ favorites: json });
					});
			},

			getCollections: () => {
				const store = getStore();
				const endpoint = process.env.BACKEND_URL + "/api/collections";
				const config = {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${store.token}`,
						cors: "no-cors"
					}
				};
				fetch(endpoint, config)
					.then(response => {
						if (!response.ok) {
							window.location.href = "/";
						}
						return response.json();
					})
					.then(json => {
						setStore({ collections: json });
					});
			},

			getClothing: category => {
				const store = getStore();
				const endpoint = `${process.env.BACKEND_URL}/api/clothing?category=${category}`;
				const config = {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${store.token}`
					}
				};

				fetch(endpoint, config)
					.then(response => response.json())
					.then(data => {
						console.log(data);
						setStore({ [category]: data });
					})
					.catch(err => console.error(err));
			},
			createOutfit: data => {
				const store = getStore();
				const endpoint = process.env.BACKEND_URL + "/api/outfit";
				const config = {
					method: "POST",
					body: JSON.stringify(data),
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${store.token}`
					}
				};
				fetch(endpoint, config)
					.then(response => response.json())
					// .then(json => console.log(json))
					.catch(err => console.error(err));
			},
			createCollection: data => {
				const store = getStore();
				const endpoint = process.env.BACKEND_URL + "/api/collection";
				const config = {
					method: "POST",
					body: JSON.stringify(data),
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${store.token}`,
						"Access-Control-Allow-Origin": "*"
					}
				};

				fetch(endpoint, config)
					.then(response => response.json())
					.catch(err => console.error(err));
			},
			getClean:data => {
				const store = getStore();
				const endpoint = process.env.BACKEND_URL + "/api/clothing";
				const config = {
					method: "POST",
					body: JSON.stringify(data),
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${store.token}`
					}
				};
				fetch(endpoint, config)
					.then(response => response.json())
					.then(json => data)
					.catch(err => console.error(err));
			},
			 selectOutfit: data => {
				const store = getStore();
				const endpoint = process.env.BACKEND_URL + "/api/outfit";
				const config = {
					method: "PUT",
					body: JSON.stringify(data),
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${store.token}`
					}
				};
				fetch(endpoint, config)
					.then(response => response.json())
					.then(json => data)
					.catch(err => console.error(err));
			 },
		}
	};
};
export default getState;
