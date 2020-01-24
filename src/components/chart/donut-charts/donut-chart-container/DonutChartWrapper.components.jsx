import React from "react";
import { Container, Row, Col, DropdownButton, Dropdown } from "react-bootstrap";
import { Doughnut } from "react-chartjs-2";

export default function DonutChartWrapper({
	chartHeading,
	chartBody1,
	chartBody2,
	totalAmount,
	spent,
	colorclass,
	balance,
	data
}) {
	return (
		<Container fluid={true} className="donut-wrap my-5">
			<Row className="mb-5">
				<Col
					md={10}
					className="d-flex align-items-center justify-content-space-between"
				>
					<img src={chartHeading} alt="chart icon" className="mr-3" />
					<div className="donut-chart-heading mr-5">
						Total Annual CAPEX Budget
					</div>
					<div className={`donut-chart-amount ${colorclass}`}>
						<h4>₦{totalAmount}</h4>
					</div>
				</Col>
				<Col md={2}>
					<DropdownButton
						className="ml-auto"
						variant="success"
						id="dropdown-success-button"
						title="Annual"
						size="sm"
					>
						<Dropdown.Item href="#/action-1">Monthly</Dropdown.Item>
						<Dropdown.Item href="#/action-2">Weekly</Dropdown.Item>
					</DropdownButton>
				</Col>
			</Row>
			<Row className="d-flex align-items-center">
				<Col md={12} lg={7}>
					<Doughnut
						data={data}
						options={{
							cutoutPercentage: 80
						}}
					/>
				</Col>
				<Col md={12} lg={5}>
					<div className="amount-spent d-flex align-items-center">
						<div className="chart-graphic mr-3">
							<img src={chartBody1} alt="green chart" />
						</div>
						<div className="amount-spent__figures">
							<p>
								Total <b>Capex</b> Spent
							</p>
							<h3>₦ {spent}</h3>
						</div>
					</div>
					<div className="balance-left mt-3 d-flex align-items-center">
						<div className="chart-graphic mr-3">
							<img src={chartBody2} alt="green chart" />
						</div>
						<div className="balance-left__figures">
							<p>
								Total <b>Capex</b> Balance
							</p>
							<h3>₦ {balance}</h3>
						</div>
					</div>
				</Col>
			</Row>
		</Container>
	);
}
