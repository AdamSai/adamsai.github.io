import './Portfolio.scss';
import * as React from 'react';
import PortfolioElement from './PortfolioElement';
import happyHour from '../img/portfolio/happy-hour.png';

function GamesPortfolio() {
	return (
		<div className="Portfolio-container">
			<div className="Portfolio-content">
				<PortfolioElement imgSrc={happyHour} />
				<PortfolioElement imgSrc={happyHour} />
				<PortfolioElement imgSrc={happyHour} />
				<PortfolioElement imgSrc={happyHour} />
				<PortfolioElement imgSrc={happyHour} />
				<PortfolioElement imgSrc={happyHour} />
				<PortfolioElement imgSrc={happyHour} />
			</div>
		</div>
	);
}

export default GamesPortfolio;
