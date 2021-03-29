import React from 'react';
import ReactLoading from 'react-loading';
import styled from 'styled-components';
import { theme } from '../../utils/theme';

const Container = styled.div`
  .loading {
    margin: auto;
  }
`;

const Loading = () => (
  <Container className="hero has-text-centered">
    <div className="hero-body">
      <ReactLoading
        type="bars"
        className="loading"
        color={theme.mainBrandColor}
        height={50}
        width={50}
      />
    </div>
  </Container>
);
export default Loading;
