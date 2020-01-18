import { createStore } from "redux";

//Store Manager
function handler(state, action) {
	switch (action.type) {
		case "auth":
			return checkAuth(state, action);
		case "getSummary":
			return getSummary(state, action);
		case "addTrip":
			return addTrip(state, action);
		default:
			return state;
	}
}

//Reducers (functions that manipulate the state)
const checkAuth = (state, action) => {
	//TODO: check authentication
};

const getSummary = (state, action) => {
	//TODO: get summary of emissions
};

const addTrip = (state, action) => {
	//TODO: add trip to DB
};

let store = createStore(handler);

store.subscribe(() => {
	console.log(store.getState());
});
