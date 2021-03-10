import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { Heading, Title, Subtitle, Button, ScrollAnimation } from '../elements';

const BlogWrapper = styled.div`
  position: relative;
  padding-top: 3rem;
  .hero {
    background: ${(props) => props.theme.mainBrandColor} !important;
  }
`;

const BlogItem = [
  {
    id: 1,
    title: 'Lorem ipsum dolor sit amet consectetur',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    image: '/images/blog-img1.png',
  },
  {
    id: 2,
    title: 'Lorem ipsum dolor sit amet consectetur',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    image: '/images/blog-img2.png',
  },
  {
    id: 3,
    title: 'Lorem ipsum dolor sit amet consectetur',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    image: '/images/blog-img3.png',
  },
];

const Blog = () => {
  return (
    <BlogWrapper>
      <div className=" hero is-medium ">
        <ScrollAnimation
          zIndex="0"
          top="23.5%"
          left="14%"
          animation="animate__fadeInUp"
        />
        <div className="hero-body container">
          <Heading centered hasWhite>
            Check out our latest article
          </Heading>
          <div className="columns is-variable is-5 is-multiline is-centered mt-6">
            {BlogItem.map((item) => (
              <div className="column is-4">
                <div className="card has-radius-medium">
                  <div className="card-image has-text-centered ">
                    <figure className="image is-4by3">
                      <img src={item.image} alt="blog-img" />
                    </figure>
                  </div>
                  <div className="card-content my-2">
                    <div className="media">
                      <div className="media-content">
                        <Title>{item.title}</Title>
                        <Subtitle small>{item.subtitle}</Subtitle>
                      </div>
                    </div>
                    <Link
                      to="/"
                      className="has-text-primary mt-4 has-text-weight-semibold"
                    >
                      Read more
                      <span className="ml-3">
                        <i className="fas fa-long-arrow-alt-right " />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="has-text-centered mt-6 pt-5">
            <Button hasBackgroundWhite isLarge to="/">
              View all
            </Button>
          </div>
        </div>
      </div>
    </BlogWrapper>
  );
};
export default Blog;
