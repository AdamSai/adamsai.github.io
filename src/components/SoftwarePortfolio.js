import './Portfolio.scss';
import PortfolioElement from './PortfolioElement';
import './PortfolioElement.scss';
import * as React from 'react';
import softwareList from '../data/SoftwareData';

function SoftwarePortfolio() {
	return (
		<div className="Portfolio-container">
			<div className="Portfolio-content">
				{softwareList.map((soft, idx) => {
					return <PortfolioElement key={idx} elementInfo={soft} />;
				})}
			</div>
		</div>
	);
}

export default SoftwarePortfolio;
