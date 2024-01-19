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
					Hello, my name is Adam Saidane, I'm a Game Developer and Software Engineer based in Copenhagen. I have previously worked at Slipgate Ironworks and Unity Technologies.
					I am currently looking for remote or in-office opportunities within the games industry. I'm a fast learner and love learning new technologies. Difficult tasks are not scary
					but an opportunity to learn and master something new! 
				</div>
			</div>
		</div>
	);
}

export default Intro;