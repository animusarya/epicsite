import React, { useState } from 'react';
import ReactPlayer from 'react-player/youtube';
import VideoCard from './VideoCard';

const VideoSection = ({ video }) => {
  const [state, setState] = useState(video[0].node.url);
  return (
    <div className="section mt-6">
      <div className="container">
        <div className="columns is-centered">
          <div id="videos" className="column is-11 ">
            <ReactPlayer
              className="player"
              url={state}
              width="100%"
              height="600px"
              volume={0.1}
              controls
              playing
            />
          </div>
        </div>
        <VideoCard video={video} setVideoUrl={(val) => setState(val)} />
      </div>
    </div>
  );
};
export default VideoSection;
