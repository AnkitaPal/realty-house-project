import express from "express"; //Import the express dependency
import "dotenv/config";
import createError from "http-errors";
import { routes } from "./routes/users.routes.js";
import bodyParser from "body-parser";
import "./config/init_mongoDB.js";

const app = express(); //Instantiate an express app, the main work horse of this server

app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());
app.enable("trust proxy");

routes(app);
//Idiomatic expression in express to route and respond to a client request
app.get("/", (req, res) => {
	//get requests to the root ("/") will route here
	res.sendFile("index.html", { root: "." }); //server responds by sending the index.html file to the client's browser
	//the .sendFile method needs the absolute path to the file, see: https://expressjs.com/en/4x/api.html#res.sendFile
});
app.use(async (req, res, next) => {
	next(createError.NotFound());
});

app.use((err, req, res, next) => {
	res.status(err.status || 500);
	res.send({
		error: {
			status: err.status || 500,
			message: err.message,
		},
	});
});
const port = process.env.PORT; //Save the port number where your server will be listening
app.listen(port, () => {
	//server starts listening for any attempts from a client to connect at port: {port}
	console.log(`Now listening on port ${port}`);
});
