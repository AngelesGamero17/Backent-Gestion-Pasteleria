import { Sequelize } from "sequelize";
import config from "../config.js";

console.log("cccc " + config.DB_HOST + config.DB_NAME + config.DB_USER + config.DB_PASS  );

export const sequelize = new Sequelize("postgres://pasteleria:password123@db:5432/pasteleria");