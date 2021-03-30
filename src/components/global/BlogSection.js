import React from 'react';
import styled from 'styled-components';
import { Heading, ScrollAnimation, Button } from '../elements';
import News from '../News';

const BlogWrapper = styled.div`
  position: relative;
  padding-top: 3rem;
  .hero {
    background: ${(props) => props.theme.mainBrandColor} !important;
  }
`;

const BlogSection = ({ article, heading }) => {
  return (
    <BlogWrapper>
      <div className="hero is-medium">
        <ScrollAnimation
          zIndex="0"
          top="23.5%"
          left="14%"
          animation="animate__fadeInUp"
        />
        <div className="hero-body container">
          {heading && (
            <Heading centered hasWhite>
              {heading}
            </Heading>
          )}

          <div className="columns is-variable is-5 is-multiline is-centered mt-6">
            {article.map(({ node }) => (
              <div className="column is-4 mb-4" key={node._id}>
                <News node={node} />
              </div>
            ))}
          </div>
          <div className="has-text-centered mt-6 pt-5">
            <Button hasBackgroundWhite isLarge to="/blog">
              View all
            </Button>
          </div>
        </div>
      </div>
    </BlogWrapper>
  );
};
export default BlogSection;
