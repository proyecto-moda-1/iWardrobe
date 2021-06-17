// const getState = ({ getStore, setState, getActions }) => {
// 	return {
// 		store: {
// 			message: null
//             top: [],
			// bottom:[],
			// footwear:[],
// 		},
// 		actions: {
// 			createClothing: data => {
// 				const store = getStore();
// 				const endpoint = process.env.BACKEND_URL + "/api/collection";
// 				const config = {
// 					method: "POST",
// 					body: JSON.stringify({
// 						collecttion_user_id: 1,
// 						name: data.name,
// 						image:
// 							"https://th.bing.com/th/id/R9e6e1694bdbb9d0148c1d5d451b7169b?rik=A70S6pmmXpjrGA&pid=ImgRaw"
// 					}),
// 					headers: {
// 						"Content-Type": "application/json",
// 						"Access-Control-Allow-Origin": "*"
// 					}
// 				};

// 				fetch(endpoint, config)
// 					.then(response => {
// 						setUser("");
// 						setName("");
// 						setImage("");

// 						return response.json();
// 					})
// 					.then(json => console.log(json))
// 					.catch(err => console.error(err));
// 			}
// 		}
// 	};
// };
// export default getState;
