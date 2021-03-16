import React, { useState } from 'react';
import ReactPlayer from 'react-player/youtube';
import VideoCard from './VideoCard';

const VideoSection = () => {
  const [state, setState] = useState(
    'https://www.youtube.com/embed/NpEaa2P7qZI',
  );
  return (
    <div className="section is-medium">
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-11">
            <ReactPlayer
              className="player"
              url={state}
              width="100%"
              height="600px"
              volume={0.1}
              controls
            />
          </div>
        </div>
        <VideoCard setVideoUrl={(val) => setState(val)} />
      </div>
    </div>
  );
};
export default VideoSection;
