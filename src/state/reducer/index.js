import axios from "axios";
import c from "../../resources/globals";
import f from "../../resources/functions";
import trans from "../../i18n";
import theme from "../../theme";

const INIT_STATE = {
	loading: {
		type: null,
	},
	isConnected: null,
	showMessage: false,
	showSideDialog: false,
	user: {},
};

export default (state = INIT_STATE, action) => {
	switch (action.type) {
		case "LOADING":
			return { ...state, loading: action.payload };
		case "SIGNUP":
			return {
				...state,
				user: action.payload.user,
				loggedIn: true,
				token: action.payload.token,
			};
		case "SHOW_MESSAGE":
			return { ...state, showMessage: action.payload };
		case "SHOW_SIDE_DIALOG":
			return { ...state, showSideDialog: action.payload };
		default:
			return state;
	}
};

export const signUp = (info) => async (dispatch) => {
	dispatch({ type: "LOADING", payload: { type: "signUpForm" } });
	var argsString = JSON.stringify(info)
		.replace(/\\"([^(")"]+)\\":/g, "___$1___:")
		.replace(/"([^(")"]+)":/g, "$1:")
		.replace(/___([^(___)"]+)___:/g, '\\"$1\\":');
	argsString = argsString.substring(1, argsString.length - 1);
	try {
		var response = await axios.post(c.apiString, {
			query: `mutation {
                createUser(${argsString},language:"${c.language}") {
                    user {
                        name
                        email
                        address
                        _id
                        gender
                    }
                    token
                }
            }`,
		});
	} catch (err) {
		console.warn("err : ", err);
		dispatch(manageErrors([{ type: "NETWORK_ERROR" }]));
		dispatch({ type: "LOADING", payload: { type: null } });
		return;
	}
	dispatch({ type: "LOADING", payload: { type: null } });
	if (response.data.errors) {
		dispatch(manageErrors(response.data.errors));
	} else {
		const data = response.data.data.createUser;
		dispatch({
			type: "SIGNUP",
			payload: { user: data.user, token: data.token },
		});
		return true;
	}
};

export const search = (search) => async (dispatch) => {
	let stringParams = JSON.stringify(search).replace(/"([^(")"]+)":/g, "$1:");
	stringParams = stringParams.substring(1, stringParams.length - 1);
	try {
		var response = await axios.post(c.apiString, {
			query: `{
                searchAddress(${stringParams}) {
                    addresses
                }
            }`,
		});
	} catch (err) {
		console.warn("err : ", err);

		return;
	}
	if (response.data.errors) {
		if (response.data.errors[0].statusCode === 401) {
		}
	} else {
		return response.data.data.searchAddress;
	}
};

export const manageErrors = (errors) => async (dispatch) => {
	errors.forEach((error) => {
		if (error.type === "ACCOUNT_EXISTS") {
			dispatch({
				type: "SHOW_MESSAGE",
				payload: trans.t("accountalreadyexists"),
			});
		} else if (error.type === "NETWORK_ERROR") {
			dispatch({
				type: "SHOW_MESSAGE",
				payload: trans.t("networkerror"),
			});
		} else if (error.type === "EMAIL_COULDNT_SEND") {
			dispatch({
				type: "SHOW_MESSAGE",
				payload: trans.t("emailcouldntsend"),
			});
		} else {
			dispatch({
				type: "SHOW_MESSAGE",
				payload: trans.t("errorhasoccured"),
			});
		}
	});
};

export const sendActivation = (url) => async (dispatch) => {
	try {
		var response = await axios.get(
			c.apiString +
				"user/activate/" +
				url.substr(0, url.indexOf("/")) +
				"/" +
				url.split("/").pop()
		);
	} catch (err) {
		console.warn("err : ", err);
		return false;
	}
	return response.data;
};

export function setLoading(val) {
	return {
		type: "LOADING",
		payload: val,
	};
}

export const setLanguage = (lang, dontChange) => async (dispatch) => {
	if (lang && !theme.wellTranslatedLanguages.includes(lang)) {
		dispatch({
			type: "SHOW_SIDE_DIALOG",
			payload: {
				title: "improvetranslationstitle",
				text: "improvetranslationstext",
				href1: "mailto:support@armbet.com",
			},
		});
	} else {
		dispatch({
			type: "SHOW_SIDE_DIALOG",
			payload: false,
		});
	}
	if (!dontChange) {
		f.changeLanguage(lang);
	}
};

export const getLeaderboard = (page, tab) => async (dispatch) => {
	console.log("getLeaderboard tab : ", tab);
	try {
		var response = await axios.post(c.apiString, {
			query: `{
                getLeaderboard(page:${page || 1},tab:"${tab}") {
                        user {
                            name
                            email
                            address
                            photo
                            index
                            _id
                            gender
                        }
                        amount
                }
            }`,
		});
	} catch (err) {
		console.warn("err : ", err);

		return;
	}
	if (response.data.errors) {
		dispatch(manageErrors(response.data.errors));
		return;
	} else {
		return response.data.data.getLeaderboard;
	}
};

export const getUser = (id) => async (dispatch) => {
	try {
		var response = await axios.post(c.apiString, {
			query: `{
                getUser(_id:"${id}") {
					name 
					photo 
					address 
					_id 
					description 
					index 
					experience 
					hasTable 
					lookingForPartners 
					country 
					gender 
					arm

                }
            }`,
		});
	} catch (err) {
		console.warn("err : ", err);
		return;
	}
	if (response.data.errors) {
		throw response.data.errors;
	} else {
		console.log(
			"response.data.data.getUser : ",
			response.data.data.getUser
		);
		return response.data.data.getUser;
	}
};

export function toggleMessageBox(val) {
	return {
		type: "SHOW_MESSAGE",
		payload: val,
	};
}

export function toggleSideDialogBox(val) {
	return {
		type: "SHOW_SIDE_DIALOG",
		payload: val,
	};
}

/*import { combineReducers } from "redux";

import main from "./main";

const AppReducer = combineReducers({
	main
});

const rootReducer = (state, action) => {

	if (action.type === 'EMPTY_STATE') {
		state = null
	}
	return AppReducer(state, action)
}

export default rootReducer;
*/
