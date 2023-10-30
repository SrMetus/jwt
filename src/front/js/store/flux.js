const getState = ({ getStore, getActions, setStore }) => {
	const url = "https://super-duper-fishstick-xvq7xwgrjxrh659j-3001.app.github.dev"
	const urlSignup = "/signup"
	return {
		store: {
			users: [],
			user: ""
		},
		actions: {
			signup: async (info) => {
				fetch(`${url}${urlSignup}`, {
					method: "POST",
					body: JSON.stringify(info),
					headers: {
						"Content-Type": "application/json",
					},
				})
					.then((data) => {
						if (!data.ok) {
							throw new Error('Error al crear cuenta');
						}
						return data.json();
					})
					.then((resp) => console.log(resp))
					.catch((error) => {
						console.log("Error", error)
					});
			},
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: async () => {
				try {
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				} catch (error) {
					console.log("Error loading message from backend", error)
				}
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
