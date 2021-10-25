import './PortfolioElement.scss';
import * as React from 'react';

function PortfolioElement(props) {
	let { imgSrc } = props;
	return (
		<div className="Portfolio-element">
			<span className="Portfolio-element-title">Sample Title</span>
			<img className="Portfolio-element-image" alt="Happy hour game" src={imgSrc} />
			<span className="Portfolio-element-description">
				Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
				Ipsum has been the industry's standard dummy text ever since the 1500s, when an
				unknown printer took a galley of type and scrambled it to make a type specimen book.
				It has survived not only five centuries, but also the leap into electronic
				typesetting, remaining essentially unchanged. It was popularised in the 1960s with
				the release of Letraset sheets containing Lorem Ipsum passages, and more recently
				with desktop publishing software like Aldus PageMaker including versions of Lorem
				Ipsum.
			</span>
		</div>
	);
}

export default PortfolioElement;
