const { Sequelize, DataTypes } = require("sequelize");
require("dotenv").config();
const path = require("path");

const sequelize = new Sequelize(
  process.env.MYSQL_DATABASE,
  process.env.MYSQL_USER,
  process.env.MYSQL_PASSWORD,
  {
    host: process.env.MYSQL_HOST || "localhost",
    port: process.env.MYSQL_PORT,
    dialect: "mysql",
  }
);

async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.products = require("./models/product.model")(sequelize, DataTypes);

db.sequelize
  .sync({ force: false })
  .then((result) => {
    console.log("DB Connect successfully");
  })
  .catch((err) => {
    console.log(err);
  });
module.exports = db;