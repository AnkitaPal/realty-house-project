import React from "react";
import { Card } from "react-bootstrap";
// import Button from "react-bootstrap/Button";
// import { Toast, Row, Col } from "react-bootstrap";
import LoginForm from "../forms/LoginForm";
import "../../css/login.css";
export default function Login() {
	return (
		<div className="login">
			<div className="h-100 d-flex align-items-center justify-content-center">
				<div className="container-flex">
					<Card>
						<Card.Header>Realty House Login</Card.Header>
						<Card.Body>
							{/* <Card.Title>Special title treatment</Card.Title> */}
							{/* <Card.Text>
						With supporting text below as a natural lead-in to additional
						content.
					</Card.Text> */}
							<LoginForm />
							{/* <Button variant="primary">Go somewhere</Button> */}
						</Card.Body>
					</Card>
				</div>
			</div>
		</div>
	);
}
