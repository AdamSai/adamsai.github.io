import Intro from './components/Intro';
import Portfolio from './components/Portfolio';

import './App.scss';
import Footer from './components/Footer';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<h1>Adam Saidane</h1>
			</header>
			<Intro />
			<Portfolio />
			<Footer />
		</div>
	);
}

export default App;
