require("dotenv").config(); // this is important!

const defaultDbConfig = {
  username: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  host: process.env.DB_PORT,
  dialect: process.env.DIALECT || "mysql",
};

module.exports = {
  development: defaultDbConfig,
  test: defaultDbConfig,
  production: defaultDbConfig,
};
