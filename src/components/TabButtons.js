import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  box-shadow: none;
  border-radius: 0;
  background-color: ${(props) =>
    props.active ? props.theme.mainBrandColor : '#f1f5f7'} !important;
  border-color: #f1f5f7;
  transition: all 0.5s ease-out;
  color: ${(props) => props.theme.darkAccent} !important;
  :focus {
    box-shadow: none !important;
    border-color: transparent !important;
  }
  :hover {
    border-color: ${(props) => props.theme.mainBrandColor} !important;
    border-width: 0.5px;
  }
`;

const TabButton = ({ title, onClick, active }) => {
  return (
    <div className="column">
      <StyledButton
        type="button"
        className="button is-fullwidth is-medium is-size-6"
        onClick={onClick}
        active={title === active}
      >
        {title}
      </StyledButton>
    </div>
  );
};
export default TabButton;
