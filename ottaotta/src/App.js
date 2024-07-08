import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeaderImage from './components/HeaderImage';
import FilterBar from './components/FilterBar';
import ContentSection from './components/HomeContent';
import VideoPage from './components/VideoPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css';
import './App.css';

import videoData from './videoData';

function App() {
  const [filter, setFilter] = useState('ALL');
  const [sortOrder, setSortOrder] = useState('Hottest');
  const [videos, setVideos] = useState(videoData);

  const handleFilterChange = (filter) => {
    setFilter(filter);
  };

  const handleSortChange = (order) => {
    setSortOrder(order);
  };

  const getFilteredVideos = () => {
    let filteredVideos = videos;
    if (filter !== 'ALL') {
      filteredVideos = videos.filter(video => video.category === filter);
    }

    switch (sortOrder) {
      case 'Hottest':
        // Implement sorting by hottest
        return filteredVideos; // Placeholder for sorting logic
      case 'Newest':
        // Implement sorting by newest
        return filteredVideos; // Placeholder for sorting logic
      case 'Most viewed':
        // Implement sorting by most viewed
        return filteredVideos; // Placeholder for sorting logic
      default:
        return filteredVideos;
    }
  };

  // UseEffect to reset state on unmount or navigation away
  useEffect(() => {
    return () => {
      setFilter('ALL');
      setSortOrder('Hottest');
    };
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <HeaderImage />
        <FilterBar onFilterChange={handleFilterChange} onSortChange={handleSortChange} />
        <Routes>
          {/* Home page */}
          <Route path="/" element={<ContentSection videos={getFilteredVideos()} />} />
          {/* VideoPage */}
          <Route path="/video/:title" element={<VideoPage />} />
          {/* Other routes can be added here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
