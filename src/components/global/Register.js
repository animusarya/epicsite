import React from 'react';

import styled from 'styled-components';
import LoginSignUpForm from '../forms/LoginSignUpForm';

const LoginCard = styled.div`
  /* .box {
    padding: 4rem;
    background-color: #edc4d1;
  } */
  p {
    color: ${(props) => props.theme.darkShades};
  }
`;

const Register = ({ handleChangeForm, onSubmit }) => {
  return (
    <LoginCard>
      <div className="section is-medium">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-6">
              <h1 className="is-size-2 has-text-weight-bold has-text-black has-text-centered mb-4">
                Create An Account
              </h1>
              <p className="has-text-centered is-size-6">
                Create an account to enjoy all the services without any ads for
                free!
              </p>
              <div className="mt-5">
                <LoginSignUpForm isNameInput onSubmit={onSubmit} />
                <p className="has-text-weight-normal has-text-centered mt-4">
                  Already Have An Account?
                  <span className="ml-1" onClick={handleChangeForm}>
                    Sign In
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LoginCard>
  );
};
export default Register;
