const { User } = require('../../database/models');

module.exports = {
  Mutation: {
    async createUser(root, args, context) {
      const { email, firstName, lastName, gender, imageUrl  } = args.input;
      return await User.create({ email, firstName, lastName, gender, imageUrl });
    },
    async updateUser(root, args, context) {
      try {
        const { email, firstName, lastName, gender, imageUrl  } = args.input;
        const user = await User.findOne({ where: { email }});
        if (!user) return new Error("Not found");
        return user.update({ email, firstName, lastName, gender, imageUrl });
      } catch (error) {
        console.error(error);
        return error;
      }
    },
  },
  Query: {
    async getUsers(root, args, context) {
      return await User.findAll();
    },
    async getUsersPerPage(root, args, context) {
      return User.findAll({ limit: args.limit || 10 });
    },
  },
};
