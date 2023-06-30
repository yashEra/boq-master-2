import './App.css';
import NavBar from './components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <div className='heder'>
          <NavBar />
          </div>
      </Router>
    </div>
  );
}

export default App;
