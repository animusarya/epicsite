import React from 'react';
import styled from 'styled-components';
import { Subtitle, Title } from '../elements';

const VideoItem = [
  {
    id: 1,
    title: 'Lorem ipsum dolor',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    url: 'https://www.youtube.com/embed/hnp1pt8biD4',
  },
  {
    id: 2,
    title: 'Lorem ipsum dolor',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    url: 'https://www.youtube.com/embed/NpEaa2P7qZI',
  },
  {
    id: 3,
    title: 'Lorem ipsum dolor',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    url: 'https://www.youtube.com/embed/hnp1pt8biD4',
  },
  {
    id: 4,
    title: 'Lorem ipsum dolor',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    url: 'https://www.youtube.com/embed/NpEaa2P7qZI',
  },
  {
    id: 5,
    title: 'Lorem ipsum dolor',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    url: 'https://www.youtube.com/embed/hnp1pt8biD4',
  },
  {
    id: 6,
    title: 'Lorem ipsum dolor',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    url: 'https://www.youtube.com/embed/NpEaa2P7qZI',
  },
  {
    id: 7,
    title: 'Lorem ipsum dolor',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    url: 'https://www.youtube.com/embed/NpEaa2P7qZI',
  },
  {
    id: 8,
    title: 'Lorem ipsum dolor',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    url: 'https://www.youtube.com/embed/NpEaa2P7qZI',
  },
];

const Section = styled.div`
  .card {
    background-color: transparent;
    box-shadow: none;
  }
`;

const VideoCard = ({ setVideoUrl }) => {
  return (
    <Section className="section">
      <div className="container">
        <div className="columns is-variable is-5 is-multiline is-centered mt-6">
          {VideoItem.map((item) => (
            <div key={item.id} className="column is-3 mb-6">
              <button
                type="button"
                className="card "
                onClick={() => setVideoUrl(item.url)}
              >
                <div className="card-image">
                  <img src="/images/youtube-img.png" alt="youtube-img" />
                </div>
                <div className="content has-text-centered">
                  <div className="media">
                    <div className="media-content mt-5">
                      <Title>{item.title}</Title>
                      <Subtitle centered small>
                        {item.subtitle}
                      </Subtitle>
                    </div>
                  </div>
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
export default VideoCard;
