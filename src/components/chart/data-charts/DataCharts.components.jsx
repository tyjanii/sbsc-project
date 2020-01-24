import React, { Component } from "react";

import greenchart from "../../../img/green_chart.svg";
import redchart from "../../../img/red_chart.svg";
import yellowchart from "../../../img/yellow_chart.svg";
import DataChartsWrapper from "./DataChartsWrapper.components";
class DataCharts extends Component {
	state = {
		data: [
			{
				id: 1,
				title: "Pending Budget Reassignment Status",
				value: 200,
				icon: greenchart
			},
			{
				id: 2,
				title: "Approved Budget Reassignment Status",
				value: 373,
				icon: yellowchart
			},
			{
				id: 3,
				title: "Declined Budget Reassignment Status",
				value: 372,
				icon: redchart
			}
		]
	};
	render() {
		const chartComponent = this.state.data.map(({ id, ...data }) => {
			return <DataChartsWrapper key={id} {...data} />;
		});
		return <div className="data-grid">{chartComponent}</div>;
	}
}

export default DataCharts;
