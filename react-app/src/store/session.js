
import { useHistory } from "react-router-dom";
// constants
const SET_USER = "session/SET_USER";
const REMOVE_USER = "session/REMOVE_USER";

const setUser = (user) => ({
	type: SET_USER,
	payload: user,
});

const removeUser = () => ({
	type: REMOVE_USER,
});

const initialState = { user: null };

export const authenticate = () => async (dispatch) => {
	const response = await fetch("/api/auth/", {
		headers: {
			"Content-Type": "application/json",
		},
	});
	if (response.ok) {
		const data = await response.json();
		console.log(data)
		if (data.errors) {
			return;
		}

		dispatch(setUser(data));
	}
};

export const login = (email, password) => async (dispatch) => {
	const response = await fetch("/api/auth/login", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			email,
			password,
		}),
	});

	if (response.ok) {
		const data = await response.json();
		dispatch(setUser(data));
		return null;
	} else if (response.status < 500) {
		const data = await response.json();
		if (data.errors) {
			return data.errors;
		}
	} else {
		return ["An error occurred. Please try again."];
	}
};

export const logout = () => async (dispatch) => {
	const response = await fetch("/api/auth/logout", {
		headers: {
			"Content-Type": "application/json",
		},
	});

	if (response.ok) {
		dispatch(removeUser());
	}
};

export const signUp = (formBody, history) => async (dispatch) => {
	// try {
	const response = await fetch("/api/auth/signup", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(formBody),
	});
	console.log("THUNK RESPONSE****", response)
	const data = await response.json();
	console.log("session data*********", data)
	if (response.ok) {
		dispatch(setUser(data));
		history.push('/');
		// return Promise.resolve(data);

		return data
	} else {
		return data
		// const errorObject = Object.values(data)
		// const newErrorObject = Object.fromEntries(
		// 	errorObject.map(error => {
		// 		const [key, value] = error.split(" : ").map(str => str.trim());
		// 		return [key, value];

		// 	})
		// )
		// return newErrorObject
	}
	// } catch (error) {
	// 	console.log("catch block error", error)
	//   return Promise.reject(error);
	// }
};

export const update = (formBody, history) => async (dispatch) => {
	console.log('New info in formBody====>', formBody)
	console.log("What is history=====>", history)
	// try {
	const response = await fetch("/api/auth/update", {
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(formBody),
	});

	const data = await response.json();
	console.log("session data========>", data)
	if (response.ok) {
		dispatch(setUser(data));
		history.push('/');

		return data
	} else {
		return data
	}
};
// export const signUp =(formBody, history) => async (dispatch) => {
// 	// const responseBody = (first_name, last_name, username, email, password, location, latitude, longitude, prepper_type, prepper_description, bio)
// 	// console.log("responsebody", responseBody)
// 	console.log("form body in thunk", formBody)
// 	try{const response = await fetch("/api/auth/signup", {
// 		method: "POST",
// 		headers: {
// 			"Content-Type": "application/json",
// 		},
// 		body: JSON.stringify(
// 			formBody
// 		),
// 	});
// 		const data = await response.json();
// 		dispatch(setUser(data));
// 		history.push('/')
// 		return Promise.resolve(data);
// 	} catch (error) {
// 		const errors = (error && error.json) ? await error.json() : { message: error.toString() }
//         return Promise.reject(errors);
// 	}
// };



export default function reducer(state = initialState, action) {
	switch (action.type) {
		case SET_USER:

			return { user: action.payload };
		case REMOVE_USER:
			return { user: null };
		default:
			return state;
	}
}
