import './Portfolio.scss';

import * as React from 'react';

function Portfolio() {
	return (
		<div className="Portfolio-container">
			<h2>Portfolio</h2>
			<div className="Portfolio-content">
				<div className="Portfolio-button-text">
					<span>Games</span>
					<div className="Portfolio-button-image Games-image" />
				</div>
				<div className="Portfolio-button-text">
					<span>Software</span>
					<div className="Portfolio-button-image Soft-image" />
				</div>
			</div>
		</div>
	);
}

export default Portfolio;
