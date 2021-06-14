const getApi = () => {
    return {
        store: {
            message: null,
            clothing: [],
        },
        actions: {
            createClothing: (data) => {
                const store = getStore();
                const endpoint = process.env.BACKEND_URL + "/api/clothing";
                const config = {
                    method: "POST",
                    body: JSON.stringify({
                        name: data.name,
                        category: data.category,
                        image: "https://th.bing.com/th/id/R9e6e1694bdbb9d0148c1d5d451b7169b?rik=A70S6pmmXpjrGA&pid=ImgRaw"
                    }),
                    headers: { "Content-Type": "application/json" }
                };

                fetch(endpoint, config)
                    .then(response => response.json())
                    .then(json => console.log(json))
                    .catch(err => console.error(err));
            },

        }
    };
};

export default getState;




        // Use getActions to call a function within a fuction
//         exampleFunction: () => {
//             getActions().changeColor(0, "green");
//         },

//         getMessage: () => {
//             // fetching data from the backend
//             fetch(process.env.BACKEND_URL + "/api/clothing")
//                 .then(resp => resp.json())
//                 .then(data => setStore({ message: data.message }));
//             // .catch(error => console.log("Error loading message from backend", error));
//         },
//         changeColor: (index, color) => {
//             //get the store
//             const store = getStore();

//             //we have to loop the entire demo array to look for the respective index
//             //and change its color
//             const demo = store.demo.map((elm, i) => {
//                 if (i === index) elm.background = color;
//                 return elm;
//             });

//             //reset the global store
//             setStore({ demo: demo });
//         }
//     }











