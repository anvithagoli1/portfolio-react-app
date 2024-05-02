import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { FunFactCard } from './components/funfactcard/funfactcard';

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
