import React from "react";
import { Card, Tabs, Tab } from "react-bootstrap";
// import Button from "react-bootstrap/Button";
// import { Toast, Row, Col } from "react-bootstrap";
import LoginForm from "../forms/LoginForm";
import "../../css/login.css";
export default function Login() {
	return (
		<div className="login">
			{/* <div className="loginForm"> */}
			<div className="card_login">
				<Card>
					<Card.Header
						style={{
							backgroundColor: "black",
							color: "white",
						}}
					>
						Welcome
					</Card.Header>
					<Card.Body>
						<Tabs
							id="controlled-tab-example"
							// activeKey={key}
							// onSelect={(k) => setKey(k)}
							className="mb-3"
						>
							<Tab eventKey="home" title="SignUp">
								<LoginForm />
							</Tab>
							<Tab eventKey="profile" title="Login">
								<LoginForm />
							</Tab>
						</Tabs>

						{/* <Button variant="primary">Go somewhere</Button> */}
					</Card.Body>
				</Card>
			</div>
			{/* </div> */}
		</div>
	);
}
