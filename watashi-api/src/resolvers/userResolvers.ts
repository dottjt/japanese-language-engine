const { User } = require('../entity/User');

const userQuery = {
  getUser: async (_, { accessToken }) => {
    const user = await User.findOne({ accessToken });
    return user;
  },
  getUserViaAccessToken: async (_, { accessToken }) => {
    const user = await User.findOne({ accessToken });
    return user;
  },
  doesUserExist: async (_, { email }) => {
    const userObject = await User.findOne({ email });

    if (userObject) {
      return true;
    };

    return false;
  },
};


const userMutation = {
  createUser: async (_, { username, email, thumbUrl, accessToken, idToken, expiresAt }) => {
    // check if user exists first. 
    const userObject = await User.findOne({ email });

    if (!userObject) {
      const user = new User();

      user.username = username;
      user.email = email;
      user.thumbUrl = thumbUrl;
      user.accessToken = accessToken;
      user.idToken = idToken;
      user.expiresAt = expiresAt;
  
      await user.save();

      return true;
    };

    return false;
  },
  updateUser: async (_, { id, username, email, thumbUrl, accessToken, idToken, expiresAt }) => {
    const user = await User.findOne(id);
    
    user.username = username;
    user.email = email;
    user.thumbUrl = thumbUrl;
    user.accessToken = accessToken;
    user.idToken = idToken;
    user.expiresAt = expiresAt;

    await user.save();
  },
  removeUser: async (_, { id }) => {
    const user = await User.findOne(id);
    await user.remove();
  },
};

module.exports = {
  userQuery,
  userMutation,
};
export {};
