import React from 'react';
import DatePicker from './DatePicker';

function UploadVideo() {
  return (
    <div className="col-10">
      <header className="d-flex justify-content-between align-items-center pt-5 mb-4 border-bottom pt-3">
        <h1>Upload Videos</h1>
      </header>
      
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Post on: 2024-06-25 5PM</h5>
          <DatePicker />
          <div className="text-center">
            <div className="mb-3">
              <i className="bi bi-cloud-arrow-up" style={{ fontSize: '48px' }}></i>
            </div>
            <div className="mb-3">
              <input type="file" className="form-control" />
            </div>
            <p>Current review queue: Fast</p>
            <p>Estimated review completion time: Within 10 minutes</p>
          </div>
        </div>
      </div>
      
      <footer className="mt-4">
        <p>
          By submitting your videos to YouTube, you acknowledge that you agree to YouTube's 
          <a href="#" className="text-decoration-none">Terms of Service</a> and 
          <a href="#" className="text-decoration-none">Community Guidelines</a>. Please be sure not to violate others' copyright or privacy rights.
        </p>
      </footer>
    </div>
  );
}

export default UploadVideo;
