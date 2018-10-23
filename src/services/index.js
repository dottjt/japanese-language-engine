// eslint-disable-next-line no-unused-vars
module.exports = function (app) {

  app.use('todos', {
    
    async get(name) {
      // Return an object in the form of { name, text }
      return {
        name,
        text: `You have to do ${name}`
      };
    }
  });
};
