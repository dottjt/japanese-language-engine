import gql from 'graphql-tag';

export const CREATE_USER = gql`
  mutation createUser($username: String!, $email: String!, $thumbUrl: String!, $accessToken: String!, $idToken: String!, $expiresAt: String!) {
    createUser(username: $username, email: $email, thumbUrl: $thumbUrl, accessToken: $accessToken, idToken: $idToken, expiresAt: $expiresAt) {
      username
      email
      thumbUrl
      accessToken
      idToken
      expiresAt
    }
  }
`;
