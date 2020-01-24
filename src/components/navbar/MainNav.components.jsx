import React from "react";
import "./main-nav.styles.scss";
import { NavContext } from "../../contexts/NavContexts";
import burger from "../../img/home.svg";
import profilePic from "../../img/profile-pic.svg";

class MainNav extends React.Component {
	static contextType = NavContext;
	render() {
		const { toggleActive } = this.context;
		console.log(this.context);
		return (
			<div className="nav-wrapper">
				<div className="burger-box">
					<img
						className="burger"
						src={burger}
						alt="burger-menu"
						onClick={toggleActive}
					/>
				</div>
				<div className="user-profile">
					<div className="profile-picture-box mr-3">
						<img src={profilePic} alt="user profile" />
					</div>
					<div className="username-box">
						<p className="username">Bidemi Yusuf</p>
						<p className="position">Executive</p>
					</div>
				</div>
			</div>
		);
	}
}

export default MainNav;
