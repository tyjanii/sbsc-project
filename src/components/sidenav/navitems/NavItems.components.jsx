import React, { Component } from "react";
import { Link } from "react-router-dom";
import homeIcon from "../../../img/Menuicon_Home.svg";
import requestIcon from "../../../img/Menuicon_Requests.svg";
import approvalIcon from "../../../img/Menuicon_Approval.svg";
import "./nav-items.styles.scss";

class NavItems extends Component {
	constructor() {
		super();
		this.state = {
			navComponents: [
				{
					id: 1,
					title: "Dashboard",
					img: homeIcon,
					url: "/"
				},
				{
					id: 2,
					title: "Budget",
					img: requestIcon,
					url: "/budget"
				},
				{
					id: 3,
					title: "Approval",
					img: approvalIcon,
					url: "/approval"
				}
			]
		};
	}
	render() {
		const navItemList = this.state.navComponents.map(item => {
			return (
				<li key={item.id}>
					<img src={item.img} alt={item.title} />
					<Link to={item.url}>{item.title}</Link>
				</li>
			);
		});
		return (
			<div className="nav-align">
				<ul className="nav-items">{navItemList}</ul>
			</div>
		);
	}
}

export default NavItems;
