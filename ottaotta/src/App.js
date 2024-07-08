import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './HomePage';
import VideoPage from './components/VideoPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          {/* Home page */}
          <Route path="/" element={<HomePage />} />
          {/* VideoPage */}
          <Route path="/video/:title" element={<VideoPage />} />
          {/* Other routes can be added here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
