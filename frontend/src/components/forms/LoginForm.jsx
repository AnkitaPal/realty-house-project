import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Toast } from "react-bootstrap";
import AuthService from "../services/AuthService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getUser } from "../services/UserInfo";

export default function LoginForm() {
	const [showPassword, setShowPassword] = useState(false);
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
	const [message, setMessage] = useState("");
	const [show, setShow] = useState(false);
	const email = useFormInput("");
	const password = useFormInput("");
	const navigate = useNavigate();
	const toggle = () => {
		setShowPassword(!showPassword);
	};

	const handleLogin = async (e) => {
		e.preventDefault();
		// setLogin(true);
		// const email1 = email.value;
		// const password1 = password.value;
		const userFromCache = getUser();
		if (userFromCache === null) {
			await AuthService.login(email.value, password.value).then(
				() => {
					console.log("In AuthService");
					// (response) => {
					// 	setUserCache(response.data.accessToken, response.data.user);
					// response.data.accessToken
					navigate(`/dashboard`);
					// : navigate("/");
					// if (response.data.accessToken)
					// 	console.log(response.data.accessToken);
					// navigate("/FirstPage");
				},
				(error) => {
					console.log(error);
					const resMessage =
						(error.response &&
							error.response.data &&
							error.response.status) ||
						error.status ||
						error.toString();
					console.log(error.response);
					if (resMessage === 401) {
						setShow(true);
						setMessage("Username/Password Invalid or Inactive User");
					}
					if (resMessage === 404) {
						setShow(true);
						setMessage("User not Found");
					}
					// setLoading(false);
					// setMessage(resMessage);
				}
			);
		} else navigate("/dashboard");
	};
	return (
		<div>
			<Form className="login_form">
				<Form.Group className="input_email">
					{/* <Form.Label>Email</Form.Label> */}

					<Form.Control
						type="email"
						{...email}
						placeholder="john.doe@example.com"
					/>
					<FontAwesomeIcon icon="fa-solid fa-envelope" />
				</Form.Group>

				<Form.Group className="input_password">
					{/* <Form.Label>Password</Form.Label> */}
					<Form.Control
						type={showPassword ? "text" : "password"}
						{...password}
						placeholder="password"
					/>
					<FontAwesomeIcon id="fa_lock" icon="fa-solid fa-lock" />
					<FontAwesomeIcon
						id="fa_eye"
						onClick={toggle}
						icon={
							showPassword ? "fa-solid fa-eye" : "fa-solid fa-eye-slash"
						}
					/>
				</Form.Group>

				<Button
					className="loginButton"
					variant="primary"
					size="lg"
					block="block"
					type="submit"
					// value={Login ? "Loggin in" : "Logged In"}
					onClick={handleLogin}
				>
					Login
				</Button>
				<p>
					{" "}
					Forgot your password? <a href="/">Reset Password</a>
				</p>
				{message && (
					<Toast
						onClose={() => setShow(false)}
						show={show}
						delay={3000}
						autohide
						// initial={{ opacity: 0, y: 50, scale: 0.3 }}
						// animate={{ opacity: 1, y: 0, scale: 1 }}
						// exit={{ opacity: 0, y: 20, scale: 0.5 }}
						toggle="animation"
						animation-reset="false"
						animation="slide-out-left"
						bg="danger"
						className="px-4"
					>
						<Toast.Body className="text-white">{message}</Toast.Body>
					</Toast>
				)}
			</Form>
		</div>
	);
}
