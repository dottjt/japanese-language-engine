import gql from 'graphql-tag';

const GET_USER = gql`
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

export default {
  GET_USER,
};
