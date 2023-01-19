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
					Technology at the IT University of Copenhagen, Denmark. I am currently working on my thesis, and will finish my studies in 
					June 2023. I previously worked as a software engineer student worker at 
					Unity Technologies. I am currently looking for student opportunities in the games industry.
				</div>
			</div>
		</div>
	);
}

export default Intro;
