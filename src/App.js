import logo from './img/under_construction.gif';
import Intro from './components/Intro';
import Portfolio from './components/Portfolio';

import './App.scss';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<h1>Adam Saidane</h1>
			</header>
			<Intro />
			<Portfolio />
		</div>
	);
}

export default App;
