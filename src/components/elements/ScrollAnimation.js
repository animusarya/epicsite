/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled from 'styled-components';
import 'animate.css/animate.min.css';
import ScrollAnimation from 'react-animate-on-scroll';

const Scroll = styled(ScrollAnimation)`
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  bottom: ${(props) => props.bottom};
  z-index: ${(props) => (props.zIndex ? props.zIndex : -1)};
  opacity: unset !important;
`;

const Animation = ({ animation, image, ...props }) => (
  <Scroll
    className="is-hidden-mobile"
    animateIn={animation}
    duration={1}
    {...props}
  >
    <figure className="image is-128x128">
      <img src={image || '/images/dotted.png'} alt="dotted-animation" />
    </figure>
  </Scroll>
);

export default Animation;
