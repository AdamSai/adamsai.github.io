import './Footer.scss';
import * as React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import itchioLogo from '../img/ui/itchio.png';
import TwitterIcon from '@mui/icons-material/Twitter';
function Footer() {
	return (
		<div className="Footer">
			<div className="Footer-icons">
				<GitHubIcon
					className="Footer-icon"
					onClick={() => window.open('https://github.com/AdamSai')}
					fontSize="large"
				/>
				<TwitterIcon
					className="Footer-icon"
					onClick={() => window.open('https://twitter.com/Predmada')}
					fontSize="large"
				/>
				<img
					onClick={() => window.open('https://predmada.itch.io')}
					className="Footer-icon"
					alt="itch.io logo"
					src={itchioLogo}
				/>
			</div>
		</div>
	);
}

export default Footer;
