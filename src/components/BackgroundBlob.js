import React from 'react';
import { Blob } from 'react-blob';

const Avatar = ({ src, alt }) => <Blob size="100px" src={src} alt={alt} />;

const FunnyLinkButton = ({ href, ...props }) => (
  <a href={href}>
    <Blob size="2em" {...props} />
  </a>
);

const BackgroundBlob = ({ style, props }) => (
  <Blob
    size="100vh"
    style={{
      position: 'absolute',
      top: '295%',
      right: '-25%',
      zIndex: -1,
      backgroundColor: '#7A2540',
      color: 'white',
      fontSize: '50vh',
      ...style,
    }}
    {...props}
  />
);

export default BackgroundBlob;
