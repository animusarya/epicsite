import React from 'react';
import styled from 'styled-components';
import CountUp from 'react-countup';
// import { Title } from '../elements';

const ReviewItem = [
  {
    id: 1,
    img: 'images/share-icon.png',
    title: 'Used by schools',
    count: 600,
    suffix: '+',
  },
  {
    id: 2,
    img: 'images/checked.png',
    title: 'Reviews',
    count: 3000,
    suffix: '+',
  },
  {
    id: 3,
    img: 'images/bookmark.png',
    title: 'Use our study notes',
    count: 500,
    suffix: 'K+',
  },
];

const Section = styled.div`
  background: -webkit-linear-gradient(top, #7a2540 50%, transparent 50%);
  margin-bottom: 9rem;
  .card {
    box-shadow: 0px 10px 20px rgba(41, 41, 42, 0.07);
    border-radius: 8px;
  }
  figure {
    position: absolute;
    top: 25%;
    left: 45%;
    bottom: 0;
  }
  .back-round {
    background: #ffe3c1;
    height: 64px;
    width: 64px;
    border-radius: 100%;
  }
  p {
    font-size: ${(props) => props.theme.fontSizeMedium} !important;
    color: ${(props) => props.theme.darkShades}!important;
  }
  .counting {
    color: ${(props) => props.theme.mainBrandColor}!important;
  }
`;

const CountSection = () => {
  return (
    <Section className="section ">
      <div className="container mt-6">
        <div className="card section">
          <div className="columns  is-centered">
            {ReviewItem.map((item) => (
              <div className="column is-4" key={item.id}>
                <div className="card-image is-flex is-justify-content-center">
                  <div className="back-round">
                    <figure className="image is-32x32">
                      <img src={item.img} alt="Placeholder-img" />
                    </figure>
                  </div>
                </div>
                <div className="has-text-centered mt-4">
                  <CountUp
                    className="counting is-size-1 has-text-weight-bold"
                    end={item.count}
                    duration={35}
                    suffix={item.suffix}
                  />
                </div>
                <div className="content has-text-centered mt-3">
                  <p className="has-text-weight-medium">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};
export default CountSection;
