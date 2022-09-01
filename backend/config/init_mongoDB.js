import mongoose from "mongoose";
import { MONGO_IP, MONGO_PORT } from "./db_config.js";
const mongoURL = `mongodb://${MONGO_IP}:${MONGO_PORT}/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.1.9`;

const connectionWithRetry = () => {
	mongoose
		.connect(mongoURL, {
			dbName: process.env.DB_NAME,
			useNewUrlParser: true,
			useUnifiedTopology: true,
		})
		.then(() => {
			console.log("mongodb connected.");
		})
		.catch((err) => {
			console.log(err.message);
			setTimeout(connectionWithRetry, 5000);
		});
};

connectionWithRetry();

mongoose.connection.on("connected", () => {
	console.log("Mongoose connected to db");
});

mongoose.connection.on("error", (err) => {
	console.log(err.message);
});

mongoose.connection.on("disconnected", () => {
	console.log("Mongoose connection is disconnected.");
});

process.on("SIGINT", async () => {
	await mongoose.connection.close();
	process.exit(0);
});
