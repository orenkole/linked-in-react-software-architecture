import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import styled from "styled-components";
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Articles } from './pages/Articles';

const BigScreenHeading = styled.h1`
	color: green;
	font-size: 96px;
`;

const App = () => {
	return (
		<>
			<BigScreenHeading>Server-Side Rendering Example</BigScreenHeading>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/about">About</Link>
				</li>
				<li>
					<Link to="/articles">Articles</Link>
				</li>
			</ul>
			<Switch>
				<Route path="/" exact>
					<Home />
				</Route>
				<Route path="/about">
					<About />
				</Route>
				<Route path="/articles">
					<Articles />
				</Route>
			</Switch>
		</>
	);
}

export default App;
