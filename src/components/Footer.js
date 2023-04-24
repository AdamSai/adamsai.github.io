import './Footer.scss';
import * as React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import itchioLogo from '../img/ui/itchio.png';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { ReactComponent as ReactLogo } from '../img/ui/itchio.svg';
function Footer() {
	return (
		<div className="Footer">
			<div className="Footer-icons">
				<GitHubIcon
					className="Footer-icon"
					onClick={() => window.open('https://github.com/AdamSai')}
					fontSize="large"
				/>
				<LinkedInIcon
					className="Footer-icon"
					onClick={() => window.open("https://www.linkedin.com/in/adam-saidane-2b4640182/")}
					fontSize="large"
				/>
				<TwitterIcon
					className="Footer-icon"
					onClick={() => window.open('https://twitter.com/Predmada')}
					fontSize="large"
				/>
				<ReactLogo onClick={() => window.open('https://predmada.itch.io')}
					className="Footer-icon"
					fontSize="large"
					alt="itch.io logo" />
			</div>
		</div>
	);
}

export default Footer;
