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
			outfit: {},
			collections: [],
			selectedCollection: {},
			selectedOutfits: [],
			name: [],
			top: [],
			bottom: [],
			footwear: [],
			clean: [],
			favorite: {},
			collection_id: 0
		},
		actions: {
			createUser: (data, callback) => {
				const store = getStore();
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
					.then(response => {
						if (response.ok) {
							getActions().getClothing(data.get("category"));
						}
					})
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
			swicthClean: (data, id) => {
				const store = getStore();
				const endpoint = process.env.BACKEND_URL + `/api/clothing?id=${id}`;
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
			favoriteBrand: id => {
				const store = getStore();
				const endpoint = `${process.env.BACKEND_URL}/api/users/outfits/${id}/favorite`;
				const config = {
					method: "PUT",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${store.token}`,
						"Access-Control-Allow-Origin": "*"
					}
				};
				fetch(endpoint, config)
					.then(response => {
						setStore({
							favorite: response.favorite
						});
					})
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
			storeCollections: data => {
				const store = getStore();
				const endpoint = process.env.BACKEND_URL + "/api/collections";
				const config = {
					method: "POST",
					body: JSON.stringify(data),
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${store.token}`,
						cors: "no-cors"
					}
				};
				fetch(endpoint, config)
					.then(response => response.json())
					.then(json => {
						setStore({ collections: json });
					})
					.catch(err => console.error(err));
			},
			collection_id: id => {
				setStore({
					collection_id: id
				});
			},
			getClothing: category => {
				const store = getStore();
				const endpoint = `${process.env.BACKEND_URL}/api/clothing?category=${category}`;
				const config = {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${store.token}`,
						cors: "no-cors"
					}
				};

				fetch(endpoint, config)
					.then(response => response.json())
					.then(data => {
						setStore({ [category]: data });
					})
					.catch(err => console.error(err));
			},
			createOutfit: (data, clothings) => {
				const store = getStore();
				const endpoint = process.env.BACKEND_URL + "/api/outfit";
				data["collectionId"] = store.collection_id;
				data["clothings"] = clothings;
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
			getTodayOutfit: data => {
				const store = getStore();
				const endpoint = `${process.env.BACKEND_URL}/api/users/today_outfits`;
				const config = {
					method: "GET",
					headers: {
						Authorization: `Bearer ${store.token}`,
						cors: "no-cors"
					}
				};

				fetch(endpoint, config)
					.then(response => response.json())
					.then(data => {
						setStore({ todayOutfit: data });
					})
					.catch(err => console.error(err));
			},
			todaysOutfit: (id, data) => {
				const store = getStore();
				const endpoint = process.env.BACKEND_URL + `/api/today_outfit/${id}`;
				const config = {
					method: "POST",
					body: data,
					headers: {
						Authorization: `Bearer ${store.token}`
					}
				};
				fetch(endpoint, config).then(response => {
					if (response.ok) {
						console.log(data);
						// getActions().getTodayOutfit(data.get("todayOutfit"));
					}
				});
			},
			selectCollection: collection => {
				setStore({ selectedCollection: collection });
			}
		}
	};
};
export default getState;
