import './Portfolio.scss';
import * as React from 'react';
import PortfolioElement from './PortfolioElement';
import gamesList from '../data/GamesData';
function GamesPortfolio() {
	return (
		<div className="Portfolio-container">
			<div className="Portfolio-content">
				{gamesList.map((game, idx) => {
					return <PortfolioElement key={idx} elementInfo={game} />;
				})}
			</div>
		</div>
	);
}

export default GamesPortfolio;
