import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import videoData from './videoData'; // Assuming the videoData is imported correctly

// needs filters work
function Recommendations() {
  return (
    <div className="pt-2 mt-3 border-top">
      <h5>Recommendations:</h5>
      {videoData.slice(1).map((video, index) => (
        <div className="row mb-2" key={index}>
          <div className="col-5">
            <a href="#" className="nav-link" title={video.title}>
              <img src={video.imgSrc} className="card-img-top" alt={video.title} />
            </a>
          </div>
          <div className="col-7" style={{ fontSize: 'smaller' }}>
            <a href="#" className="nav-link" title={video.title}>
              <h6>{video.title}</h6>
            </a>
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
