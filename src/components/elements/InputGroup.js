import React from 'react';
import styled from 'styled-components';

const Group = styled.div`
  input,
  textarea {
    background: ${(props) => props.theme.backgroundInputColor} !important;
    margin-top: 0.6rem;
    border-color: ${(props) => props.theme.borderColor} !important;
    box-shadow: none;
    border-radius: 5px;
  }
  input:active,
  .input:focus,
  .textarea:active,
  .textarea:focus {
    border-color: ${(props) => props.theme.borderColor};
    box-shadow: none;
  }
  input ::placeholder,
  textarea ::placeholder {
    color: ${(props) => props.theme.placeholderColor};
    background: ${(props) => props.theme.backgroundInputColor};
    font-size: ${(props) => props.theme.fontSizeSmall};
    font-weight: 400;
  }
  .label {
    font-size: ${(props) => props.theme.fontSizeSmall};
  }
`;

const InputGroup = ({
  label,
  value,
  type,
  name,
  placeholder,
  onChange,
  onBlur,
  errors,
}) => {
  return (
    <Group className="field mb-5">
      <label className="label mb-0  has-text-weight-semibold">{label}</label>
      <div className="control">
        <input
          className="input"
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
        {errors && <p className="help is-danger">{errors}</p>}
      </div>
    </Group>
  );
};
export default InputGroup;
