import { User } from "../models/users.schema.js";
import { validateSchema } from "../config/schema_validation.js";
import createError from "http-errors";

export const UserController = {
	login: async (req, res, next) => {
		try {
			const user = await User.findOne({ email: req.body.email });
			if (!user) throw createError.NotFound("User not found");
			console.log("calling login");
			const result = await validateSchema.validateAsync(req.body);
			const isMatch = await user.isValidPassword(result.password);

			// console.log("Match?", isMatch);
			if (!isMatch)
				throw createError.Unauthorized("Username/password not valid");

			// const accessToken = await signAccessToken(user.id);
			// const refreshToken = await signRefreshToken(user.id);
			res.json({ user });
		} catch (error) {
			next(error);
		}
	},

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

			// var randomPassword = Math.random().toString(36).slice(2);
			var newData = {
				firstName: result.firstName,
				lastName: result.lastName,
				email: result.email,
				password: result.password,
				phoneNumber: result.phoneNumber,
			};

			const user = new User(newData);
			const savedUser = await user.save();
			res.json(savedUser);
		} catch (error) {
			next(error);
		}
	},

	updateUser: async (req, res, next) => {
		try {
			var result = await validateSchema.validateAsync(req.body);
			const user = await User.findOne({
				email: req.body.email,
			});
			if (!user) throw createError.NotFound("User not found");
			// delete result.driverID;
			delete result.email;
			console.log(result);
			User.findOneAndUpdate(
				{ email: req.body.email },
				{ $set: result },
				{ new: true },
				(error, doc) => {
					if (error) {
						res.send(error);
					}
					if (!doc) {
						res.status(304).send({
							error: { status: 304, message: "User Not Modified" },
						});
					} else res.send(doc);
				}
			);
		} catch (error) {
			next(error);
		}
	},

	forgotPassword: async (req, res, next) => {
		try {
			const user = await User.findOne({
				email: req.body.email,
			});
			if (!user) throw createError.NotFound("User not found");

			var randomPassword = Math.random().toString(36).slice(2);
			// const isSuccess = await sendEmail(user.emailID, randomPassword);
			// console.log("is success email?", isSuccess);
			// if (!isSuccess) {
			// 	throw createError.ServiceUnavailable(
			// 		`Can not send email to ${user.emailID}`
			// 	);
			// }
			// user.passwordIsTemporary = true;
			user.password = randomPassword;
			var savedUser = await user.save();
			res.send(savedUser);
		} catch (error) {
			next(error);
		}
	},

	updateUserPassword: async (req, res, next) => {
		try {
			var result = await validateSchema.validateAsync(req.body);

			const user = await User.findOne({
				email: req.body.email,
			});
			if (!user) throw createError.NotFound("User not registered");
			// if (user.passwordIsTemporary == false){
			//   const isMatch = await user.isValidPassword(result.password)
			//   if(isMatch == true){
			//     res.send("Changed Password is same")
			//   }
			//   else
			//     throw createError.Unauthorized('Username/password not valid')
			// }
			// if (user.passwordIsTemporary == true) {
			// 	user.passwordIsTemporary = false;
			// }
			user.password = result.password;
			const saveduser = await user.save();
			res.json(saveduser);
		} catch (error) {
			next(error);
		}
	},

	// logout: async (req, res, next) => {
	// 	try {
	// 		const { refreshToken } = req.body;
	// 		if (!refreshToken) throw createError.BadRequest();
	// 		const userId = await verifyRefreshToken(refreshToken);
	// 		client.DEL(userId, (err, val) => {
	// 			if (err) {
	// 				console.log(err.message);
	// 				throw createError.InternalServerError();
	// 			}
	// 			console.log(val);
	// 			res.status(200).send({
	// 				success: { status: 200, message: "Logout Successful" },
	// 			});
	// 		});
	// 	} catch (error) {
	// 		next(error);
	// 	}
	// },
};
