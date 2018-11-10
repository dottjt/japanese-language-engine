import gql from 'graphql-tag';

const CREATE_USER = gql`
  query createUser($email: String!) {
    createUser(email: $email) {
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
  CREATE_USER,
};
