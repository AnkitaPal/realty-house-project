import { User } from "../models/users.schema.js";
import { validateSchema } from "../config/schema_validation.js";
import createError from "http-errors";

export const UserController = {
	// login: async (req, res, next) => {
	//    try {
	//       const user = await User.findOne({ emailID: req.body.emailID });
	//       if (!user) throw createError.NotFound("User not found");
	//       if (user.isActive == false)
	//          throw createError.Unauthorized("User is not active");

	//       const result = await validateSchema.validateAsync(req.body);
	//       const isMatch = await user.isValidPassword(result.password);

	//       console.log(isMatch);
	//       if (!isMatch)
	//          throw createError.Unauthorized("Username/password not valid");

	//       const accessToken = await signAccessToken(user.id);
	//       const refreshToken = await signRefreshToken(user.id);
	//       res.json({ user, accessToken, refreshToken });
	//    } catch (error) {
	//       next(error);
	//    }
	// },

	addUser: async (req, res, next) => {
		try {
			// var type = req.url.split("/")[2];
			console.log(req.body);
			var result = await validateSchema.validateAsync(req.body);
			const doesExist = await User.findOne({
				email: result.email,
				// emailID: result.emailID,
			});
			if (doesExist) {
				console.log("User exists");
				throw createError.Conflict(
					`${result.email} is already been registered.`
				);
			}

			var randomPassword = Math.random().toString(36).slice(2);
			var newData = {
				firstName: result.firstName,
				lastName: result.lastName,
				email: result.email,
				password: randomPassword,
				phoneNumber: result.phoneNumber,
			};

			//send email to new user
			// const isSuccess = await sendEmail(newData.emailID, newData.password);
			// console.log(isSuccess);
			// if (!isSuccess) {
			// 	throw createError.ServiceUnavailable(
			// 		`Can not send email to ${newData.emailID}`
			// 	);
			// }
			const user = new User(newData);
			const savedUser = await user.save();
			res.json(savedUser);
		} catch (error) {
			next(error);
		}
	},
};
