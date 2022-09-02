import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CollapsibleNavbar(props) {
	return (
		<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
			<Container>
				<Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="me-auto">
						{/* <Nav.Link href="#features">Features</Nav.Link> */}
						{/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
						{/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
							<NavDropdown.Item href="#action/3.1">
								Action
							</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.2">
								Another action
							</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.3">
								Something
							</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#action/3.4">
								Separated link
							</NavDropdown.Item>
						</NavDropdown> */}
					</Nav>
					<Nav>
						{/* <Nav.Link href="#deets">More deets</Nav.Link> */}
						<FontAwesomeIcon icon="fa-thin fa-user" />
						<NavDropdown
							title={props.user.firstName}
							id="collasible-nav-dropdown"
						>
							<NavDropdown.Item href="#action/3.1">
								Settings
							</NavDropdown.Item>

							<NavDropdown.Divider />
							<NavDropdown.Item href="#action/3.4">
								Logout
							</NavDropdown.Item>
						</NavDropdown>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default CollapsibleNavbar;
