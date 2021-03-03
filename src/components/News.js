import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { truncate } from 'lodash';

const CardWrapper = styled(Link)`
  border-radius: 0;
  box-shadow: none !important;
  .box {
    position: relative;
    top: -3rem;
    border-radius: 0;
    box-shadow: none !important;
  }
  .border-bottom {
    margin-top: 30px;
    border-top: 1px solid #e5e5e5;
    padding-top: 10px;
  }
`;

const Image = styled(Img)`
  height: 300px;
  object-fit: cover;
`;

const News = ({ node: data }) => {
  if (!data) {
    return null;
  }

  return (
    <CardWrapper
      key={data._id}
      to={`/article/${data.slug ? data.slug.current : ''}`}
      className="card"
    >
      <div className="card-image">
        {data && data.image && data.image.asset && (
          <Image
            fluid={data.image.asset.fluid}
            alt={data.title ? data.title : 'Past Projects'}
            className="blog-img"
          />
        )}

        <div className="card-content">
          <div className="media-content">
            <div className="box">
              <h1 className="title is-size-4 has-text-weight-normal is-spaced is-family-primary">
                {data.title}
              </h1>
              <p className="subtitle is-6">
                {truncate(data.description, {
                  length: 160,
                })}
              </p>
              <div className="border-bottom" />
            </div>
          </div>
        </div>
      </div>
    </CardWrapper>
  );
};
export default News;
