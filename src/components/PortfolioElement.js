import './PortfolioElement.scss';
import * as React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';

function PortfolioElement(props) {
	let { title, imgSrc, year, description, projectLink, sourceCode } = props.elementInfo;

	let sourceCodeButton = () => {
		if (sourceCode)
			return (
				<span onClick={() => window.open(sourceCode)} className="Portfolio-element-button">
					<GitHubIcon className="Portfolio-element-icon" />
					<span>Source code</span>
				</span>
			);
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
			<div className="Portfolio-element-buttons">
				<span onClick={() => window.open(projectLink)} className="Portfolio-element-button">
					<LinkIcon className="Portfolio-element-icon" />
					<span>Project</span>
				</span>
				{sourceCodeButton()}
			</div>
		</div>
	);
}

export default PortfolioElement;
