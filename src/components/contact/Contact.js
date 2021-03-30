import React, { useEffect } from 'react';
import Swal from 'sweetalert2';
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
    if (res.error)
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: res.error.message,
      });
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
          Swal.fire('Submit Successfully!', '', 'success');
        }
      }}
    />
  );
};

export default Contact;
