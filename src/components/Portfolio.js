import './Portfolio.scss';
import * as React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import GamesPortfolio from './GamesPortfolio';
import SoftwarePortfolio from './SoftwarePortfolio';

function Portfolio() {
	return (
		<div className="Portfolio-root-container">
			<h2>Portfolio</h2>
			<Router>
				<div className="Portfolio-root-content">
					<Link className="Portfolio-button-text" to="/GamesPortolio">
						<span>Games</span>
						<div className="Portfolio-button-image Games-image" />
					</Link>
					<Link className="Portfolio-button-text" to="/SoftwarePortfolio">
						<span>Software</span>
						<div className="Portfolio-button-image Soft-image" />
					</Link>
				</div>

				<Switch>
					<Route path="/GamesPortolio">
						<GamesPortfolio />
					</Route>
					<Route path="/SoftwarePortfolio">
						<SoftwarePortfolio />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default Portfolio;
