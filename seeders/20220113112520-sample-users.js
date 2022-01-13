'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "John",
          email: "john@gmail.com",
          password: "32r3rhfhiehfhfh",
          age: 36,
          gender: "male",
          phoneNumber: 1234,
          address: "bulkybrown street",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "jessie",
          email: "jessie@gmail.com",
          password: "32r3rhfhiehfhfh",
          age: 25,
          gender: "female",
          phoneNumber: 1234,
          address: "bulkybrown street",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "felix",
          email: "felix@gmail.com",
          password: "32r3rhfhiehfhfh",
          age: 36,
          gender: "male",
          phoneNumber: 2233,
          address: "bulkybrown street",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]
    )
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("Users", null, {});
  }
};
