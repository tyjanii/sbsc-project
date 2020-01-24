import React from "react";
import Labels from "../../components/labels/Labels.components";
import "./homepage.styles.scss";
import Charts from "../../components/chart/Chart.components";
export default function HomePage() {
	return (
		<div className="util-padding">
			<Labels />
			<Charts />
		</div>
	);
}
