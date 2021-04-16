import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

export function Head() {
	return (
		<Navbar bg="dark" variant="dark" expand="lg" className="w-100 px-3">
			<Navbar.Brand href="#">Start Bootstrap</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="ml-auto">
					<Nav.Link className="active" href="#home">
						Home
					</Nav.Link>
					<Nav.Link href="#link">About</Nav.Link>
					<Nav.Link href="#link">Services</Nav.Link>
					<Nav.Link href="#link">Contact</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}
