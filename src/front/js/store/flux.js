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
				const endpoint =
					"https://3001-turquoise-constrictor-3gals9le.ws-eu09.gitpod.io" + "/api/clothing?category=top";
				const config = {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						"Access-Control-Allow-Origin": "*"
					}
				};

				fetch(endpoint, config)
					.then(response => response.json())
					.then(data => {
						setStore({
							top: top
						});
						callback();
					})
					.catch(err => console.error(err));
			},

			getBottom: data => {
				const store = getStore();
				const endpoint =
					"https://3001-turquoise-constrictor-3gals9le.ws-eu09.gitpod.io" + "/api/clothing?category=bottom";
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
					.then(data => {
						setStore({
							bottom: data.bottom
						});
						callback();
					})
					.catch(err => console.error(err));
			},

			getFootwear: data => {
				const store = getStore();
				const endpoint =
					"https://3001-turquoise-constrictor-3gals9le.ws-eu09.gitpod.io" + "/api/clothing?category=footwear";
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
					.then(data => {
						setStore({
							footwear: footwear
						});
						callback();
					})
					.catch(err => console.error(err));
			}
		}
	};
};
export default getState;
