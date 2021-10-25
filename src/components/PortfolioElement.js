import './PortfolioElement.scss';
import * as React from 'react';

function PortfolioElement(props) {
	let { title, imgSrc, description } = props.elementInfo;

	return (
		<div className="Portfolio-element">
			<span className="Portfolio-element-title">{title}</span>
			<img className="Portfolio-element-image" alt={title} src={imgSrc.default} />
			<span className="Portfolio-element-description">{description}</span>
		</div>
	);
}

export default PortfolioElement;
