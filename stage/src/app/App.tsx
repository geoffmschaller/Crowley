import React from 'react';
import './App.sass';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Index from "../pages/index/Index";
import Footer from "../inflatables/footer/Footer";
import Contact from "../pages/contact/Contact";
import UserReview from "../pages/userReview/UserReview";
import Category from "../pages/category/Category";
import INTERIORS from "../data/Interiors";
import EXTERIORS from "../data/Exteriors";
import CUSTOM_PROJECTS from "../data/CustomProjects";
import Gallery from "../pages/gallery/Gallery";
import SubCategoryInterface from "../interfaces/SubCategoryInterface";
import ThankYou from "../pages/userReview/ThankYou";

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path={"/"} component={Index}/>
				<Route exact path={"/contact"} component={Contact}/>
				<Route exact path={"/user-review"} component={UserReview}/>
				<Route exact path={"/thank-you"} component={ThankYou}/>
				<Route exact path={"/interiors"} component={() => <Category data={INTERIORS}/>}/>
				{
					INTERIORS.categories.map((cat: SubCategoryInterface, index: number) => {
						return <Route exact path={`${cat.url}`} component={() => <Gallery data={cat}/>} key={index}/>
					})
				}
				<Route exact path={"/exteriors"} component={() => <Category data={EXTERIORS}/>}/>
				{
					EXTERIORS.categories.map((cat: SubCategoryInterface, index: number) => {
						return <Route exact path={`${cat.url}`} component={() => <Gallery data={cat}/>} key={index}/>
					})
				}
				<Route exact path={"/custom-projects"} component={() => <Category data={CUSTOM_PROJECTS}/>}/>
				{
					CUSTOM_PROJECTS.categories.map((cat: SubCategoryInterface, index: number) => {
						return <Route exact path={`${cat.url}`} component={() => <Gallery data={cat}/>} key={index}/>
					})
				}
				<Route component={() => <Redirect to={"/"}/>}/>
			</Switch>
			<Footer/>
		</BrowserRouter>
	);
}

export default App;
