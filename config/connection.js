const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    }
  );
}

module.exports = sequelize;
module.exports = {
  HOST: "us-cdbr-east-06.cleardb.net",
  USER: "b33e46e8125faa",
  PASSWORD: "0afb551c",
  DB: "heroku_7643ec736354xxx"
}
