import './PortfolioElement.scss';
import * as React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';
import YouTubeIcon from '@mui/icons-material/YouTube';

function PortfolioElement(props) {
	let { title, imgSrc, year, description, projectLink, sourceCode, video } = props.elementInfo;

	let buttons = () => {
		let jsx = [];
		let counter = 0;
		if (projectLink) {
			jsx[counter++] = (
				<span onClick={() => window.open(projectLink)} className="Portfolio-element-button">
					<LinkIcon className="Portfolio-element-icon" />
					<span>Project</span>
				</span>
			);
		}
		if (sourceCode) {
			jsx[counter++] = (
				<span onClick={() => window.open(sourceCode)} className="Portfolio-element-button">
					<GitHubIcon className="Portfolio-element-icon" />
					<span>Source code</span>
				</span>
			);
		}
		if (video) {
			jsx[counter++] = (
				<span onClick={() => window.open(video)} className="Portfolio-element-button">
					<YouTubeIcon className="Portfolio-element-icon" />
					<span>Gameplay</span>
				</span>
			);
		}
		return jsx;
	};
	return (
		<div className="Portfolio-element">
			{console.log(sourceCode)}
			<span className="Portfolio-element-title">{title}</span>
			<img className="Portfolio-element-image" alt={title} src={imgSrc.default} />
			<span className="Portfolio-element-year">
				Year: <span style={{ color: 'white' }}>{year}</span>
			</span>
			<span className="Portfolio-element-description">{description}</span>
			<div className="Portfolio-element-buttons">{buttons()}</div>
		</div>
	);
}

export default PortfolioElement;
