import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HomePage } from './components/homepage/homepage';
import { About } from './components/about/about';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
