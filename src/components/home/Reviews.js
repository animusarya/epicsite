/* eslint-disable react/jsx-props-no-spreading */
import React, { Component } from 'react';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

import { Heading, Subtitle } from '../elements';

const Container = styled.div`
  .container {
    background: ${(props) => props.theme.textColor};
    border-radius: 24px;
  }
  .column.is-three-fifths {
    margin-right: 2px;
  }
  img {
    border: 2px solid ${(props) => props.theme.backgroundWhite};
  }
  .slick-dots {
    bottom: -115px;
  }
  .slick-dots li.slick-active button:before {
    color: ${(props) => props.theme.lightAccent} !important;
    font-size: 10px;
  }
`;

const data = [
  {
    id: 1,
    image: '/images/placeholder-img1.png',
    name: 'Edward Newgate',
    type: 'Student',
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus egestas non semper vitae orci, cursus eleifend nisi. Ut neque accumsan amet eget aenean. Facilisis dictum pharetra.',
  },
  {
    id: 2,
    image: '/images/placeholder-img1.png',
    name: 'Newgate',
    type: 'Student',
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus egestas non semper vitae orci, cursus eleifend nisi. Ut neque accumsan amet eget aenean. Facilisis dictum pharetra.',
  },
  {
    id: 3,
    image: '/images/placeholder-img1.png',
    name: 'Edward ',
    type: 'Student',
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus egestas non semper vitae orci, cursus eleifend nisi. Ut neque accumsan amet eget aenean. Facilisis dictum pharetra.',
  },
  {
    id: 4,
    image: '/images/placeholder-img1.png',
    name: 'Edward Newgate',
    type: 'Student',
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus egestas non semper vitae orci, cursus eleifend nisi. Ut neque accumsan amet eget aenean. Facilisis dictum pharetra.',
  },
];

export default class PreviousNextMethods extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  next() {
    this.slider.slickNext();
  }

  previous() {
    this.slider.slickPrev();
  }

  render() {
    const settings = {
      arrows: false,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <Container className="section is-medium">
        <div className="container py-6">
          <div className="columns is-centered">
            <div className="column is-10">
              <div className="mb-6 mt-4">
                <Heading hasWhite centered>
                  What our customer are saying
                </Heading>
              </div>
              <div>
                <Slider ref={(c) => (this.slider = c)} {...settings}>
                  {data.map((item) => (
                    <div key={item.id} className="pb-3 mt-5 mb-6">
                      <div className="columns">
                        <div className="column">
                          <div className="media is-align-items-center">
                            <div className="media-left">
                              <figure className="image is-128x128">
                                <img
                                  className="is-rounded"
                                  src={item.image}
                                  alt="Placeholder"
                                />
                              </figure>
                            </div>
                            <div className="media-content">
                              <p className="title is-4 is-family-primary ">
                                {item.name}
                              </p>
                              <p className="subtitle is-6 is-family-primary  is-uppercase">
                                {item.type}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="column ">
                          <Subtitle hasWhite>{item.review}</Subtitle>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
        <div className="columns is-centered mt-5">
          <div className="column is-1 has-text-right">
            <button type="button" className="button" onClick={this.previous}>
              <i className="fas fa-long-arrow-alt-left" />
            </button>
          </div>
          <div className="column is-1" />
          <div className="column is-1">
            <button type="button" className="button" onClick={this.next}>
              <i className="fas fa-long-arrow-alt-right" />
            </button>
          </div>
        </div>
      </Container>
    );
  }
}
