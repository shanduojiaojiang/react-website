import React from 'react';
import {Switch, Route} from 'react-router-dom';
import LandingPage from './landingPage';
import Contact from './contact';
import About from './about';
import Projects from './projects';
import Resume from './resume';

const Main = () => (
	<Switch>
		<Route exact path = "/" component = {LandingPage} />
		<Route path = "/about" component = {About} />
		<Route path = "/contact" component = {Contact} />
		<Route path = "/projects" component = {Projects} />
		<Route path = "/resume" component = {Resume} />
	</Switch>
)

export default Main;