import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  display: inline-block;
`;

const Icon = styled.i`
  color: ${(props) => props.theme.backgroundWhite} !important;
  font-size: 1rem;
  /* margin-bottom: 1rem; */
`;

const socialNetworks = ({
  twitter,
  facebook,
  instagram,
  pinterest,
  linkdin,
}) => {
  const items = [];
  if (twitter) {
    items.push({
      id: 1,
      name: 'Twitter',
      icon: 'fab fa-twitter',
      link: twitter,
    });
  }
  if (facebook) {
    items.push({
      id: 2,
      name: 'Facebook',
      icon: 'fab fa-facebook-square',
      link: facebook,
    });
  }
  if (instagram) {
    items.push({
      id: 3,
      name: 'Instagram',
      icon: 'fab fa-instagram',
      link: instagram,
    });
  }
  if (pinterest) {
    items.push({
      id: 4,
      name: 'Pinterest',
      icon: 'fab fa-pinterest',
      link: pinterest,
    });
  }
  if (pinterest) {
    items.push({
      id: 5,
      name: 'LinkedIn',
      icon: 'fab fa-linkedin',
      link: linkdin,
    });
  }
  return items;
};

const SocialIcons = ({ data }) => (
  <Container>
    {socialNetworks({
      twitter: data.twitter,
      facebook: data.facebook,
      instagram: data.instagram,
      pinterest: data.pinterest,
      linkdin: data.linkdin,
    }).map((item) => (
      <div className="mb-5 is-flex" key={item.id}>
        <a href={item.link} target="_blank" rel="noreferrer" className="">
          <Icon className={item.icon} color={item.color} />
          <span className="has-text-white ml-2"> {item.name}</span>
        </a>
      </div>
    ))}
  </Container>
);

export default SocialIcons;
