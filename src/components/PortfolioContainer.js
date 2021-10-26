import './Portfolio.scss';
import * as React from 'react';
import PortfolioElement from './PortfolioElement';

function PortfolioContainer(props) {
	let { portfolio } = props;
	return (
		<div className="Portfolio-container">
			<div className="Portfolio-content">
				{portfolio.map((element, idx) => {
					return <PortfolioElement key={idx} elementInfo={element} />;
				})}
			</div>
		</div>
	);
}

export default PortfolioContainer;
