module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      email: DataTypes.STRING,
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      gender: DataTypes.ENUM("FEMALE", "MALE", "OTHER"),
      imageUrl: DataTypes.STRING,
    },
  );

  return User;
};
