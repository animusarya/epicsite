import React, { useEffect } from 'react';
import swal from 'sweetalert2';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import ContactForm from '../forms/ContactForm';

const mutationContactUs = gql`
  mutation contact($input: ContactInput!) {
    contact(input: $input) {
      status
      message
    }
  }
`;

const Contact = () => {
  const [executeMutation, res] = useMutation(mutationContactUs);

  useEffect(() => {
    if (res.error) swal('Oops', res.error, 'error');
  }, [res.error]);
  return (
    <ContactForm
      onSubmit={async (data) => {
        const resp = await executeMutation({
          variables: {
            input: data,
          },
        });
        if (resp) {
          swal('Submit Successfully!', '', 'success');
        }
      }}
    />
  );
};

export default Contact;
