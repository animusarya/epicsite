/* eslint-disable react/jsx-props-no-spreading */
import React, { Component } from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

import { Heading, Subtitle, ScrollAnimation } from '../elements';

const Container = styled.div`
  background-color: ${(props) => props.bgColor};

  position: relative;
  .container {
    background: ${(props) => props.theme.textColor};
    border-radius: 24px;
  }
  .column.is-three-fifths {
    margin-right: 2px;
  }
  .is-rounded {
    border: 2px solid ${(props) => props.theme.backgroundWhite};
  }
  .slick-dots {
    bottom: -115px;
  }
  .slick-dots li.slick-active button:before {
    color: ${(props) =>
      props.bgColor ? 'white' : props.theme.lightAccent} !important;
    font-size: 12px;
  }
  .slick-dots li button:before {
    color: ${(props) =>
      props.bgColor ? 'white' : props.theme.lightAccent} !important;
  }
  button {
    border: none;
    background-color: transparent;
    box-shadow: none;
    color: ${(props) =>
      props.bgColor ? 'white' : props.theme.lightAccent} !important;
    :focus {
      box-shadow: none !important;
    }
  }
  .review-sect {
    outline: none;
  }
`;
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
    const { bgColor, review, reviewHeading } = this.props;

    return (
      <Container bgColor={bgColor} className="section is-medium">
        <ScrollAnimation
          zIndex={1}
          top="10%"
          right="12%"
          animation="animate__fadeInRightBig"
        />
        <div className="container py-6">
          <div className="columns is-centered">
            <div className="column is-10">
              <div className="mb-6 mt-4">
                <Heading hasWhite centered>
                  {reviewHeading}
                </Heading>
              </div>
              <div>
                <Slider ref={(c) => (this.slider = c)} {...settings}>
                  {review.map(({ node }) => (
                    <div key={node._id} className="review-sect pb-3 mt-5 mb-6">
                      <div className="columns">
                        <div className="column">
                          <div className="media is-align-items-center">
                            <div className="media-left">
                              <figure className="image is-128x128">
                                <Img
                                  fluid={node.image.asset.fluid}
                                  alt={node.Type}
                                />
                              </figure>
                            </div>
                            <div className="media-content">
                              <p className="title is-4 is-family-primary ">
                                {node.personName}
                              </p>
                              <p className="subtitle is-6 is-family-primary  is-uppercase">
                                {node.Type}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="column ">
                          <Subtitle hasWhite>{node.comment}</Subtitle>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>

        <div className="columns is-centered mt-5 is-flex">
          <div className="column is-1 has-text-left">
            <button type="button" className="button" onClick={this.previous}>
              <i className="fas fa-long-arrow-alt-left is-size-4" />
            </button>
          </div>
          <div className="column is-1" />
          <div className="column is-1 has-text-right">
            <button type="button" className="button" onClick={this.next}>
              <i className="fas fa-long-arrow-alt-right is-size-4" />
            </button>
          </div>
        </div>
        <ScrollAnimation
          zIndex={1}
          bottom="20.7%"
          left="12%"
          animation="animate__fadeInLeftBig"
        />
      </Container>
    );
  }
}
