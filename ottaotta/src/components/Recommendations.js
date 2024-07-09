import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import videoData from '../datas/videoData'; // Assuming the videoData is imported correctly
import { Link } from 'react-router-dom';

// needs filters work, additional RecommandationVideocard.js
function Recommendations() {
  return (
    <div className="pt-2 mt-3 border-top">
      <h5>Recommendations:</h5>
      {videoData.slice(1).map((video, index) => (
        <div className="row mb-2" key={index}>
          <div className="col-5">
            <Link to={`/video/${encodeURIComponent(video.title)}`} className="nav-link" title={video.title}>
              <img src={video.imgSrc} className="card-img-top" alt={video.title} />
            </Link>
          </div>
          <div className="col-7" style={{ fontSize: 'smaller' }}>
            <Link to={`/video/${encodeURIComponent(video.title)}`} className="nav-link" title={video.title}>
              <h6>{video.title}</h6>
            </Link>
            <p>{`${video.profileTitle} ${video.views} views || ${video.time}`}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

Recommendations.propTypes = {
  videoData: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      views: PropTypes.string.isRequired,
      comments: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
      imgSrc: PropTypes.string.isRequired,
      profileImgSrc: PropTypes.string.isRequired,
      profileTitle: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      likes: PropTypes.string // Assuming likes might be a property in the future
    })
  )
};

export default Recommendations;
