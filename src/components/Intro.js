import './Intro.scss';

import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import portrait from '../img/me.png';

function Intro() {
	return (
		<div className="Intro-container">
			<div className="Intro-content">
				<Avatar className="Intro-image" alt="Adam Saidane" src={portrait} />
				<div className="Intro-text">
					Hello, my name is Adam Saidane and I am currently studying for my MSc. in Games
					Technology at the IT University of Copenhagen, Denmark. I graduated from my
					Professional Bachelor's in Software Development at Copenhagen Business Academy
					in June 2021, and I am currently looking for a student job.
				</div>
			</div>
		</div>
	);
}

export default Intro;
