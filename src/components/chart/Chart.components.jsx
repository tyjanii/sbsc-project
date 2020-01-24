import React from "react";
import "./chart.styles.scss";
import { Container, Row, Col } from "react-bootstrap";
import DonutCharts from "./donut-charts/DonutCharts.components";
import DataCharts from "./data-charts/DataCharts.components";
import BarChartComponent from "./bar-charts/BarChart.components";

function Charts() {
	return (
		<div>
			<Container fluid={true}>
				<Row>
					<Col lg={8}>
						<DonutCharts />
					</Col>
					<Col lg={4}>
						<DataCharts />
					</Col>
				</Row>

				<BarChartComponent />
			</Container>
		</div>
	);
}

export default Charts;
