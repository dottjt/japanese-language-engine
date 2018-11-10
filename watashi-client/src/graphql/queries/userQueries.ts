import gql from 'graphql-tag';

export const GET_USER = gql`
  query getUser($email: String!) {
    getUser(email: $email) {
      id
      username
      email
      thumbUrl
      accessToken
      idToken
      expiresAt
    }
  }
}
`;

export const DOES_USER_EXIST = gql`
  query doesUserExist($email: String!) {
    doesUserExist(email: $email)
  }
`;
