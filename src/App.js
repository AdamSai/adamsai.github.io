import Intro from './components/Intro';
import Portfolio from './components/Portfolio';
import ReactGA from 'react-ga';

import './App.scss';
import Footer from './components/Footer';

function App() {
	const initializeAnalytics = () => {
		ReactGA.initialize('G-PQCZVERXDC');
		ReactGA.pageview(window.location.pathname + window.location.search);
	};
	return (
		<div className="App">
			<header className="App-header">
				<h1>Adam Saidane</h1>
				{initializeAnalytics()}
			</header>
			<Intro />
			<Portfolio />
			<Footer />
		</div>
	);
}

export default App;
