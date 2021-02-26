import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  margin-top: 2rem;
  min-height: 26px;
  .level-item {
    margin-right: 0.3rem;
    margin-left: 0.3rem;
    float: left;
    a {
      padding: 0 !important;
    }
  }
`;
const Icon = styled.i`
  color: ${(props) => props.theme.darkAccent};
  font-size: 1.9rem;
  background: ${(props) => props.theme.mainBrandColor} !important;
  width: 57px !important;
  height: 57px;
  border-radius: 50%;
  text-align: center;
  padding: 18px;
  :hover {
    color: #fff;
  }
`;

const SocialIcon = ({ home }) => {
  return (
    <Container className="level">
      <div className="level-item">
        {home.twitter && (
          <a href={home.twitter} target="_blank" rel="noopener noreferrer">
            <Icon className="fab fa-twitter" />
          </a>
        )}
      </div>
      <div className="level-item">
        {home.instagram && (
          <a href={home.instagram} target="_blank" rel="noopener noreferrer">
            <Icon className="fab fa-instagram" />
          </a>
        )}
      </div>
      <div className="level-item">
        {home.instagram && (
          <a href={home.facebook} target="_blank" rel="noopener noreferrer">
            <Icon className="fab fa-facebook" />
          </a>
        )}
      </div>
    </Container>
  );
};
export default SocialIcon;
