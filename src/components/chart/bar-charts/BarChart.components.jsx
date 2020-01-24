import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
import "./bar-charts.styles.scss";
import BarChartWrapper from "./BarChartWrapper.components";

class BarChart extends Component {
	state = {
		data: [
			{
				id: 1,
				title: "Total OPEX Budget Statistics",
				tagline: "Total Budget Spent vs Total Budget Balance",
				totalSpent: "8,282,289",
				totalBalance: "8,282,289",
				barChartData: {
					labels: [
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
					],
					datasets: [
						{
							label: ["Spent"],
							barPercentage: 0.3,
							backgroundColor: "#17c7bf",
							data: [12, 20, 35, 35, 45, 23, 12, 34, 34, 12, 22, 33]
						}
					]
				}
			},
			{
				id: 2,
				title: "Total CAPEX Budget Statistics",
				tagline: "Total Budget Spent vs Total Budget Balance",
				totalSpent: "8,282,289",
				totalBalance: "8,282,289",
				barChartData: {
					labels: [
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
					],
					datasets: [
						{
							label: ["Balance"],
							barPercentage: 0.3,
							backgroundColor: "#e95957",

							data: [12, 20, 35, 35, 45, 23, 12, 34, 34, 12, 22, 20]
						}
					]
				}
			}
		]
	};
	render() {
		const barComponent = this.state.data.map(
			({ id, title, tagline, totalSpent, totalBalance, barChartData }) => {
				return (
					<Container fluid={true} key={id}>
						<Row>
							<BarChartWrapper
								title={title}
								tagline={tagline}
								totalSpent={totalSpent}
								totalBalance={totalBalance}
								chartData={barChartData}
							/>
						</Row>
					</Container>
				);
			}
		);
		return <div className="bar-container">{barComponent}</div>;
	}
}

export default BarChart;
