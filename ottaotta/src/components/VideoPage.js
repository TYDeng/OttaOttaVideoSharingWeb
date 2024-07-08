import React from 'react';
import { useParams } from 'react-router-dom';
import videoData from '../videoData'; 

function VideoPage() { 
  const { title } = useParams();
  const decodedTitle = decodeURIComponent(title); // Decode the title

  // Logic to fetch video details based on the decoded title
  const video = videoData.find(v => v.title === decodedTitle);

  if (!video) {
    return <div><p>Video not found</p></div>;
  }

  return (
    <div>
      <h1>{video.title}</h1>
      
      {/* Add more details about the video here */}
    </div>
  );
}

export default VideoPage;
