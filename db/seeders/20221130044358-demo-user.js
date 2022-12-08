"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // return fs.readFile("up.sql").then((sql) => sequelize.query(sql.toString()));
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    //   return fs
    //     .readFile("down.sql")
    //     .then((sql) => sequelize.query(sql.toString()));
  },
};
