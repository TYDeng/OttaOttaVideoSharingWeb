import React from 'react';
import VideoWindow from './VideoWindow';
import Comments from './VideoPageComments';
import AccountInfo from './AccountInfo.js';
import Recommendations from './Recommendations';
import videoData from '../datas/videoData';

function VideoPage() {
  const video = videoData[0]; // Assuming the first video is the main one to display

  return (
    <div className="container-xxxl mt-3">
      <div className="row">
        {/* Video and Comments Section */}
        <div className="col-9 text-left">
          <VideoWindow video={video} />
          <Comments />
        </div>

        {/* Account Info and Recommendations Section */}
        <div className="col-3">
          <AccountInfo />
          <Recommendations />
        </div>
      </div>
    </div>
  );
}

export default VideoPage;
