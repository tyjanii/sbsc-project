import React from "react";
import "./labels.styles.scss";
import { Container } from "react-bootstrap";
const Labels = () => {
	const today = new Date();
	const monthIndex = [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec"
	];
	const dayIndex = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday"
	];
	const date = ` ${today.getDate()} ${
		monthIndex[today.getMonth()]
	} ${today.getFullYear()}, ${dayIndex[today.getDay()]} `;
	return (
		<Container fluid={true}>
			<div className="label">
				<div className="label-header">
					<h3>Dashboard</h3>
				</div>
				<div className="label-date">{date}</div>
			</div>
		</Container>
	);
};

export default Labels;
