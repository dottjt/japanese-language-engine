query {
  doesUserExist(email: "yo")
}

mutation {
  createUser(username: "woah", email: "woah", thumbUrl:"woah", accessToken:"woah", idToken: "woah", expiresAt: "woah") {
    username
    email
    thumbUrl
    accessToken
    idToken
    expiresAt
  }
}