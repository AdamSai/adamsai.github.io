import './Portfolio.scss';
import PortfolioElement from './PortfolioElement';
import './PortfolioElement.scss';
import tempImg from '../img/portfolio/programming.jpg';
import * as React from 'react';

function SoftwarePortfolio() {
	return (
		<div className="Portfolio-container">
			<div className="Portfolio-content">
				<PortfolioElement imgSrc={tempImg} />
				<PortfolioElement imgSrc={tempImg} />
				<PortfolioElement imgSrc={tempImg} />
				<PortfolioElement imgSrc={tempImg} />
				<PortfolioElement imgSrc={tempImg} />
				<PortfolioElement imgSrc={tempImg} />
				<PortfolioElement imgSrc={tempImg} />
			</div>
		</div>
	);
}

export default SoftwarePortfolio;
