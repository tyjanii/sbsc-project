import React from "react";
import "./sidenav.styles.scss";
import logo from "../../img/logo.svg";
import { NavContext } from "../../contexts/NavContexts";
import NavItems from "./navitems/NavItems.components";

class SideNav extends React.Component {
	static contextType = NavContext;
	render() {
		const { isActive } = this.context;

		return (
			<div className={isActive === true ? `main-nav` : `main-nav hide`}>
				<div className="nav-logo-box">
					<img src={logo} alt="Express Labs Logo" className="logo" />
				</div>
				<div className="nav-items">
					<NavItems />
				</div>
			</div>
		);
	}
}

export default SideNav;
