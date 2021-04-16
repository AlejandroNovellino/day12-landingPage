import React from "react";
//import { container } from "webpack";

import { Container, Row } from "react-bootstrap";

import { Head } from "./Head";
import { Content } from "./Content";
import { Footer } from "./Footer";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	return (
		<Container fluid>
			<Row>
				<Head />
			</Row>
			<Row>
				<Content />
			</Row>
			<Row>
				<Footer />
			</Row>
		</Container>
	);
}
