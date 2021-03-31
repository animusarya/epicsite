import React from 'react';
import { Blob } from 'react-blob';
import styled from 'styled-components';

const BlobStyled = styled(Blob)``;
const BackgroundBlob = ({ size, top, bottom, left, right }) => {
  return (
    <BlobStyled
      className="is-hidden-mobile"
      size={size}
      style={{
        position: 'absolute',
        top,
        left,
        right,
        bottom,
        zIndex: -1,
        backgroundColor: '#7A2540',
        color: 'white',
        fontSize: '50vh',
      }}
    />
  );
};
export default BackgroundBlob;
