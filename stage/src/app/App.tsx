import React from 'react';
import './App.sass';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Index from "../pages/index/Index";
import FourOFour from "../pages/errors/FourOFour";
import DesktopNavigation from "../inflatables/navigation/desktop/DesktopNavigation";
import MobileNavigation from "../inflatables/navigation/mobile/MobileNavigation";
import Footer from "../inflatables/footer/Footer";

function App() {
	return (
		<BrowserRouter>
			<DesktopNavigation/>
			<MobileNavigation/>
			<Switch>
				<Route exact path={"/"} component={Index}/>
				<Route component={FourOFour}/>
			</Switch>
			<Footer/>
		</BrowserRouter>
	);
}

export default App;
