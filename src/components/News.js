import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { truncate } from 'lodash';
import { Title, Subtitle } from './elements';

const TitleLink = styled(Link)``;

const Image = styled(Img)`
  height: 300px;
  object-fit: cover;
`;

const News = ({ node: data }) => {
  if (!data) {
    return null;
  }

  return (
    <div className="card has-radius-medium">
      <div key={data._id}>
        {data && data.image && data.image.asset && (
          <Image
            fluid={data.image.asset.fluid}
            alt={data.title ? data.title : 'Past Projects'}
            className="blog-img"
          />
        )}
        <div className="card-content">
          <div className="media ">
            <div className="media-content">
              <Title> {data.title}</Title>
              <Subtitle>
                {truncate(data.description, {
                  length: 160,
                })}
              </Subtitle>
            </div>
          </div>
          <TitleLink
            to={`/article/${data.slug ? data.slug.current : ''}`}
            className="has-text-primary mt-4 has-text-weight-semibold"
          >
            Read more
            <span className="ml-3">
              <i className="fas fa-long-arrow-alt-right " />
            </span>
          </TitleLink>
        </div>
      </div>
    </div>
  );
};
export default News;
