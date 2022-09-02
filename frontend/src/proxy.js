import createProxyMiddleware from "http-proxy-middleware";

module.exports = function (app) {
	app.use(
		createProxyMiddleware({
			target: "http://localhost:3002",
			"Content-Type": "application/json",
			changeOrigin: true,
			"Access-Control-Allow-Origin": false,
		})
	);
};
// app.use(
// 	"/api",
// 	createProxyMiddleware({
// 		target: "http://localhost:5000",
// 		changeOrigin: true,
// 	})
// );
// const { createProxyMiddleware } = require("http-proxy-middleware");
