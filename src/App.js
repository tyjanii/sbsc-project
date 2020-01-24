import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Sidenav from "./components/sidenav/Sidenav.components";
import MainNav from "./components/navbar/MainNav.components";
import HomePage from "./Pages/homepage/HomePage.components";
import Budget from "./Pages/homepage/Budget.components";
import Approval from "./Pages/Approval.components";
import NavContextProvider from "./contexts/NavContexts";
function App() {
	return (
		<div className="App">
			<NavContextProvider>
				<div className="nav-component">
					<Sidenav />
				</div>
				<div className="body-components">
					<MainNav />
					<Switch>
						<Route exact path="/">
							<HomePage />
						</Route>
						<Route path="/budget">
							<Budget />
						</Route>
						<Route path="/approval">
							<Approval />
						</Route>
					</Switch>
				</div>
			</NavContextProvider>
		</div>
	);
}

export default App;
