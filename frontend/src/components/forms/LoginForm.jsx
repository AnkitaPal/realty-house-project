import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
// import { Toast, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
	const useFormInput = (initialValue) => {
		const [value, setValue] = useState(initialValue);

		const handleChange = (e) => {
			setValue(e.target.value);
		};
		return {
			value,
			onChange: handleChange,
		};
	};
	// const [Login, setLogin] = useState(false);
	// const [loading, setLoading] = useState(false);
	// const [message, setMessage] = useState("");
	// const [show, setShow] = useState(false);
	const email = useFormInput("");
	const password = useFormInput("");
	const navigate = useNavigate();

	const handleLogin = async (e) => {
		e.preventDefault();
		// setLogin(true);
		console.log(email.value, password.value);
		// const userFromCache = JSON.parse(localStorage.getItem("user"));
		// const userData = localStorage.getItem("UserDB");
		// console.log("Uesr", userData);
		// AuthService.login(email.value, password.value).then(
		// if (userFromCache === null && userData === null) {
		// 	await AuthService.login(email.value, password.value).then(
		// 		() => {
		// 			console.log("In AuthService");
		// 			// (response) => {
		// 			// 	setUserCache(response.data.accessToken, response.data.user);
		// 			// response.data.accessToken
		// 			navigate(`/section/0/0`);
		// 			// : navigate("/");
		// 			// if (response.data.accessToken)
		// 			// 	console.log(response.data.accessToken);
		// 			// navigate("/FirstPage");
		// 		},
		// 		(error) => {
		// 			console.log(error.response.status);
		// 			const resMessage =
		// 				(error.response &&
		// 					error.response.data &&
		// 					error.response.status) ||
		// 				error.status ||
		// 				error.toString();
		// 			if (resMessage === 401) {
		// 				setShow(true);
		// 				setMessage("Username/Password Invalid or Inactive User");
		// 			}
		// 			if (resMessage === 404) {
		// 				setShow(true);
		// 				setMessage("User not Found");
		// 			}
		// 			// setLoading(false);
		// 			// setMessage(resMessage);
		// 		}
		// 	);
		// } else
		navigate("/dashboard");
	};
	return (
		// <div className="form-wrapper">
		<Form>
			<Form.Group controlId="emailID">
				<Form.Label>Email</Form.Label>
				<Form.Control type="email" {...email} />
			</Form.Group>
			<br />

			<Form.Group controlId="password">
				<Form.Label>Password</Form.Label>
				<Form.Control type="password" {...password} />
			</Form.Group>
			{/* <Row className="mt-4">
					<Col xs={3}> */}
			<br />
			<Button
				variant="primary"
				size="lg"
				block="block"
				type="submit"
				// value={Login ? "Loggin in" : "Logged In"}
				onClick={handleLogin}
			>
				Login
			</Button>
			{/* </Col> */}
		</Form>
		// </div>
	);
}
