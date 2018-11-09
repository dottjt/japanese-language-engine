import { User } from '../entity/User';
import { createConnection } from 'typeorm';

export const userQuery = {
  getUser: (_, { accessToken }) => {
    createConnection().then(async connection => {
  
      await User.findOne({ accessToken });
      // await connection.manager.findOne({ accessToken });
  
    }).catch(error => console.log(error));
  },
};

export const userMutation = {
  createUser: async (_, { username, email, thumbUrl, accessToken, idToken, expiresAt }) => {
    createConnection().then(async connection => {

      const user = new User();

      user.username = username;
      user.email = email;
      user.thumbUrl = thumbUrl;
      user.accessToken = accessToken;
      user.idToken = idToken;
      user.expiresAt = expiresAt;
  
      await user.save();
      
    }).catch(error => console.log(error));
  },
  updateUser: async (_, { id, username, email, thumbUrl, accessToken, idToken, expiresAt }) => {
    createConnection().then(async connection => {

      const user = await User.findOne(id);
      
      user.username = username;
      user.email = email;
      user.thumbUrl = thumbUrl;
      user.accessToken = accessToken;
      user.idToken = idToken;
      user.expiresAt = expiresAt;

      await user.save();

    }).catch(error => console.log(error));
  },
  removeUser: async (_, { id }) => {
    createConnection().then(async connection => {

      const user = await User.findOne(id);
      await user.remove();

    }).catch(error => console.log(error));      
  },
}
