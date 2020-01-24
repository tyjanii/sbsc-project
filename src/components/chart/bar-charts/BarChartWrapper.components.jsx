import React from "react";
import { Bar } from "react-chartjs-2";
import { Col } from "react-bootstrap";
export default function BarChartWrapper({
	title,
	tagline,
	totalSpent,
	totalBalance,
	chartData
}) {
	return (
		<Col md={12} lg={12} className="bar-box mb-5">
			<h3>{title}</h3>
			<p className="tagline">{tagline}</p>
			<div className="totals-wrapper">
				<div className="total-spent">
					<p>
						Total Spent<span> ₦ {totalSpent}</span>
					</p>
				</div>
				<div className="total-balance">
					<p>
						Total Balance<span> ₦ {totalBalance}</span>
					</p>
				</div>
			</div>

			<Bar data={chartData} width={10} height={5} />
		</Col>
	);
}
