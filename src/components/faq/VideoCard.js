import React from 'react';
import styled from 'styled-components';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Subtitle, Title } from '../elements';

const Section = styled.div`
  .card {
    background-color: transparent;
    box-shadow: none;
  }
  img {
    cursor: pointer;
  }
`;

const VideoCard = ({ setVideoUrl, video }) => {
  return (
    <Section className="section">
      <div className="container">
        <div className="columns is-variable is-5 is-multiline is-centered mt-6">
          {video.map(({ node: data }) => (
            <div key={data._id} className="column is-3 mb-6">
              <div className="card ">
                <button type="button" onClick={() => setVideoUrl(data.url)}>
                  <AnchorLink href="#videos">
                    <div className="card-image">
                      <img src="/images/youtube-img.png" alt="youtube-img" />
                    </div>
                  </AnchorLink>
                </button>
                <div className="content has-text-centered">
                  <div className="media">
                    <div className="media-content mt-5">
                      <Title>{data.title}</Title>
                      <Subtitle centered small>
                        {data.description}
                      </Subtitle>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
export default VideoCard;
