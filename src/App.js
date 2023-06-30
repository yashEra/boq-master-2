import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <div className='heder'><Navbar /></div>
      </Router>
    </div>
  );
}

export default App;
