import React from 'react';
import styled from 'styled-components';

const SelectWrapper = styled.div`
  select {
    background: ${(props) => props.theme.backgroundInputColor};
    font-size: ${(props) => props.theme.fontSizeSmall};
    color: ${(props) => props.theme.placeholderColor};
  }
  .select:not(.is-multiple):not(.is-loading)::after {
    border-color: ${(props) => props.theme.placeholderColor}; !important;
    top: 1rem;
  }
  select,
  select {
    :active,
    :focus {
      border-color: ${(props) => props.theme.borderColor} !important;
      box-shadow: none !important;
    }
  }
  .label {
    font-size: ${(props) => props.theme.fontSizeSmall};
  }
`;

const SelectGroup = ({ label, text }) => {
  return (
    <SelectWrapper>
      <label className="label has-text-weight-semibold mb-3">{label}</label>
      <div className="select  is-fullwidth mb-4">
        <select>
          <option>{text}</option>
        </select>
      </div>
    </SelectWrapper>
  );
};
export default SelectGroup;
