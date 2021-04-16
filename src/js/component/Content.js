import React from "react";
import { Container, Row, Col, Jumbotron, Button } from "react-bootstrap";

import { MyCard } from "./MyCard";

export function Content() {
	let randomUrls = [
		"https://picsum.photos/286/286?random=1",
		"https://picsum.photos/286/286?random=2",
		"https://picsum.photos/286/286?random=3",
		"https://picsum.photos/286/286?random=4"
	];
	return (
		<Container fluid>
			<Row className="justify-content-center px-3 pt-3 pb-0">
				<Jumbotron className="w-100 m-0">
					<h1 className="display-3">A Warm welcome!</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea
						commodo consequat.
					</p>
					<p>
						<Button variant="primary">Call to action!</Button>
					</p>
				</Jumbotron>
			</Row>
			<Row xs={1} md={4} className="justify-content-between">
				{randomUrls.map((url, index) => (
					<Col key={`col-${index}`} className="p-3">
						<MyCard key={`card-${index}`} url={url} />
					</Col>
				))}
			</Row>
		</Container>
	);
}
