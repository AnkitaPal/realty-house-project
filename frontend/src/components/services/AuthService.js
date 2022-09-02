import axios from "axios";
import {
	// 	getToken,
	setUserInfo,
	removeUserCache,
	// 	setUserTutorialDatabase,
} from "./UserInfo";
// import { licenseType } from "./LicenseType";
// const API_URL = "http://localhost:3000/api/auth/";

// const AuthVerify = () => {
// 	const token = getToken();
// 	if (token) {
// 		const decodedJwt = JSON.parse(window.atob(token.split(".")[1]));
// 		// console.log(decodedJwt.exp * 1000);
// 		if (decodedJwt.exp * 1000 < Date.now()) {
// 			logout();
// 			return false;
// 		} else return true;
// 	} else return false;

// 	// const user = JSON.parse(localStorage.getItem("user"));

// 	// if (user) {
// 	// 	const decodedJwt = parseJwt(user.accessToken);

// 	// 	if (decodedJwt.exp * 1000 < Date.now()) {
// 	// 		props.logOut();
// 	// 	}
// 	// }
// };

const login = async (email, password) => {
	console.log(email, password);
	const response = await axios.post(
		"http://localhost:3002/login",
		{
			email: email,
			password: password,
		},
		{
			headers: {
				changeOrigin: true,
				"Access-Control-Allow-Origin": false,
			},
		}
	);
	// console.log(response);
	setUserInfo(response.data.user);
};

const logout = () => {
	removeUserCache();

	// localStorage.removeItem("user");
	// return axios.post(API_URL + "signout").then((response) => {
	// 	return response.data;
	// });
};

// const getCurrentUser = () => {
// 	return JSON.parse(localStorage.getItem("user"));
// };

const AuthService = {
	// register,
	// AuthVerify,
	login,
	logout,
	// getCurrentUser,
};

export default AuthService;
