import { User } from "../models/users.schema.js";
import { UserController } from "../controllers/users.controllers.js";
// import { verifyAccessToken } from "../config/jwt_helper.js";

export function routes(app) {
	// user login
	// app.route('/login').post(UserController.login);

	// Search User by Driver Id
	// app.route('/searchUser/:driverID').get(verifyAccessToken, (req, res) => {
	//    var licenseID = req.url.split('/')[2];
	//    User.findOne({ driverID: licenseID }, (err, user) => {
	//       if (err) { res.send(err) }
	//       if (!user) { res.status(404).send({ error: { status: 404, message: 'User Not Found' } }) }
	//       else { res.status(200).send(user) };
	//    });
	// });

	//show active users by Licese Type
	// app.get('/user/:type', verifyAccessToken, (req, res) => {
	//    var type = req.url.split('/')[2];
	//    User.find().where({ $and: [{ "currentLicenceType": licenceType[type] }, { "isActive": true }] })
	//       .exec((err, user) => {
	//          if (err) { res.send(err) }
	//          if (!user) { res.status(404).send({ error: { status: 404, message: 'User Not Found' } }) }
	//          else { res.status(200).send(user) }
	//       });
	// });

	// Show all user
	// app.route('/getAllUser')
	//    .get(verifyAccessToken, (req, res) => {
	//       User.find({}, (err, users) => {
	//          if (err) { res.send(err) }
	//          if (!users) { res.status(404).send({ error: { status: 404, message: 'No User Found' } }) }
	//          else { res.status(200).send(users) }
	//       });
	//    });

	// Add user
	app.route("/addUser").post(UserController.addUser);
}
