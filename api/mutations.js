import { gql } from 'graphql-request'

export const createApplication = gql`
  mutation ($name: String!, $email: String!, $message: String!) {
    createApplication(data: { name: $name, email: $email, message: $message }) {
      name
      email
      message
    }
  }
`;
