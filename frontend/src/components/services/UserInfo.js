// return the user data from the local storage
export const getUser = () => {
	const userStr = localStorage.getItem("user");
	if (userStr) return JSON.parse(userStr);
	else return null;
};

// return the token from the local storage
// export const getToken = () => {
// 	return localStorage.getItem("accessToken") || null;
// };

// remove the token and user from the local storage
export const removeUserCache = () => {
	// localStorage.removeItem("accessToken");
	localStorage.removeItem("user");
	// localStorage.removeItem("UserDB");
};

// set the token and user from the local storage
export const setUserInfo = (token, user) => {
	// localStorage.setItem("accessToken", token);
	localStorage.setItem("user", JSON.stringify(user));
};

// export const setUserLanguage = (language) => {
// 	localStorage.setItem("userLanguage", language);
// };

// export const getUserLanguage = () => {
// 	return localStorage.getItem("userLanguage");
// };
