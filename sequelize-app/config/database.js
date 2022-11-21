import { Sequelize } from "sequelize";
const db = new Sequelize('sequelize-app', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

export default db;