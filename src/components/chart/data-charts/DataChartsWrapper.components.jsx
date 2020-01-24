import React from "react";
import "./data-charts.styles.scss";
import { Container, Row, Col } from "react-bootstrap";
export default function DataChartsWrapper({ icon, value, title }) {
	return (
		<Container className="data-wrapper my-5">
			<Row>
				<Col md={2}>
					<img src={icon} alt="chart logo" />
				</Col>
				<Col md={10}>
					<p className="data-wrapper-text">{title}</p>
				</Col>
			</Row>
			<div className="data-chart-value mt-3">
				<h1>{value}</h1>
			</div>
		</Container>
	);
}
