import React from "react";
import PropTypes from "prop-types";

import { Card, Button, ListGroup } from "react-bootstrap";

function MyCard(props) {
	return (
		<Card className="text-center w-100" style={{ width: "18rem" }}>
			<Card.Img variant="top" src={props.url} />
			<Card.Body>
				<Card.Title>
					<strong>Card Title</strong>
				</Card.Title>
				<Card.Text>
					{`Some quick example text to build on the card title and make up the bulk of
                    the card's content.`}
				</Card.Text>
			</Card.Body>
			<ListGroup className="list-group-flush py-2">
				<Button variant="primary" className="m-auto">
					Find Out More!
				</Button>
			</ListGroup>
		</Card>
	);
}

MyCard.propTypes = {
	url: PropTypes.string
};

export { MyCard };
