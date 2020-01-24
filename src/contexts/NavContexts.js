import React, { createContext, Component } from "react";

export const NavContext = createContext();

class NavContextProvider extends Component {
	state = {
		isActive: true
	};

	toggleActive = () => {
		this.setState({ isActive: !this.state.isActive });
	};
	render() {
		return (
			<NavContext.Provider
				value={{ ...this.state, toggleActive: this.toggleActive }}
			>
				{this.props.children}
			</NavContext.Provider>
		);
	}
}

export default NavContextProvider;
