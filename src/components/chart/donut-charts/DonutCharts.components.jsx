import React, { Component } from "react";
import "./donut-charts.styles.scss";
import { Container } from "react-bootstrap";
import bluechart from "../../../img/blue_chart.svg";
import greenchart from "../../../img/green_chart.svg";
import greenMoney from "../../../img/green_money_icon.svg";
import orangeMoney from "../../../img/orange_money_icon.svg";
import purpleMoney from "../../../img/purple_money_icon.svg";
import yellowMoney from "../../../img/yellow_money_icon.svg";

import DonutChartWrapper from "./donut-chart-container/DonutChartWrapper.components";

export default class DonutCharts extends Component {
	state = {
		data: [
			{
				id: 1,
				totalAmount: "50,000,000",
				spent: "18,000,000",
				balance: "32,000,000",
				chartHeading: bluechart,
				chartBody1: greenMoney,
				colorclass: "greencolor",
				chartBody2: orangeMoney,
				data: {
					labels: ["64% Remaining"],
					datasets: [
						{
							data: [64, 36],
							backgroundColor: ["#6915cf", "#e5e5e5"]
						}
					]
				}
			},
			{
				id: 2,
				totalAmount: "20,000,000",
				spent: "10,000,000",
				balance: "10,000,000",
				chartHeading: greenchart,
				chartBody1: purpleMoney,
				chartBody2: yellowMoney,
				colorclass: "redcolor",
				data: {
					labels: ["50% Remaining"],
					datasets: [
						{
							data: [50, 50],
							backgroundColor: ["#fb0091", "#e5e5e5"]
						}
					]
				}
			}
		]
	};
	render() {
		const donutComponent = this.state.data.map(item => {
			return (
				<DonutChartWrapper
					key={item.id}
					totalAmount={item.totalAmount}
					spent={item.spent}
					balance={item.balance}
					chartBody1={item.chartBody1}
					chartBody2={item.chartBody2}
					chartHeading={item.chartHeading}
					data={item.data}
					colorclass={item.colorclass}
				/>
			);
		});
		return <Container fluid={true}>{donutComponent}</Container>;
	}
}
