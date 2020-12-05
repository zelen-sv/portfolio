import { gql } from 'graphql-request'

export const createApplication = gql`
  mutation CreateApplicationMutation($name: String!, $email: String!, $message: String!) {
    createApplication(
      name: $name,
      email: $email,
      message: $message
    )
  }
`;
