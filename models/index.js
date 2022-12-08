"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const process = require("process");
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
// const config = require(__dirname + "/../config/config.json")[env];
const pg = require("pg");
const db = {};

let sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST || "localhost",
    port: process.env.DB_PORT,
    dialect: process.env.DIALECT || "mysql",
    dialectModule: process.env.DIALECT == "postgres" ? pg : undefined,
  }
);

/*
 * Load file js trong thu muc model, mỗi file đại diện cho 1 bảng trong db
 *  ( trừ file index )
 */
fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    );
    console.log("DB_MODEL_NAME: " + model.name);
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.sequelize
  .sync({
    force: false,
    // process.env.NODE_ENV == "development"
  })
  .then((result) => {
    console.log("DB Connect successfully");
  })
  .catch((err) => {
    console.error(err);
  });

module.exports = db;
