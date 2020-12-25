import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import AboutMe from './pages/AboutMe';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ContactMe from './pages/ContactMe';

function App() {
	return (
		<div className='app'>
			<Router>
				<Navbar />
				<Home />
				<AboutMe />
				<Projects />
				<ContactMe />
			</Router>
		</div>
	);
}

export default App;
