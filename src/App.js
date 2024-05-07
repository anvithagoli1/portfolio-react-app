import './App.css';
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HomePage } from './components/homepage/homepage';
import { About } from './components/about/about';
import { Theme } from './components/theme/theme';

function App() {
  let [color, setColor] = useState("rgb(81, 146, 121)");

  return (
    <Router basename="/portfolio-react-app">
      <Routes>
        <Route path="/" element={<HomePage color={color}/>} />
        <Route path="/about" element={<About color={color}/>} />
        <Route path="/theme" element={<Theme color={color} setColor={setColor}/>} />
      </Routes>
    </Router>
  );
}

export default App;
