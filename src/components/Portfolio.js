import './Portfolio.scss';
import React, { useState } from 'react';
import PortfolioContainer from './PortfolioContainer';
import gamesList from '../data/GamesData';
import softwareList from '../data/SoftwareData';

function Portfolio() {
	const [activeList, setActiveList] = useState('games');
	let portfolioElements = () => {
		if (activeList === 'games') {
			return <PortfolioContainer portfolio={gamesList} />;
		} else {
			return <PortfolioContainer portfolio={softwareList} />;
		}
	};
	// T est
	return (
		<div className="Portfolio-root-container">
			<h2>Portfolio</h2>
			<div className="Portfolio-root-content">
				<div
					className={'Portfolio-button-text' + (activeList === 'games' ? ' active' : '')}
					onClick={() => setActiveList('games')}>
					<span>Games</span>
					<div className="Portfolio-button-image Games-image" />
				</div>
				<div
					activeClassName="active"
					className={'Portfolio-button-text' + (activeList === 'soft' ? ' active' : '')}
					onClick={() => setActiveList('soft')}>
					<span>Software</span>
					<div
						className={
							'Portfolio-button-image Soft-image' +
							(activeList === 'soft' ? ' active' : '')
						}
					/>
				</div>
			</div>
			{portfolioElements()}
		</div>
	);
}

export default Portfolio;
