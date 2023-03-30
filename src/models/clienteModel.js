import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const clienteModel = sequelize.define("clienteModel", {
    ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nomCli: {
        type: DataTypes.STRING,
        allowNull: false
      },
      apellCli: {
        type: DataTypes.STRING,
        allowNull: false
      },
      direCli: {
        type: DataTypes.STRING,
        allowNull: false
      },
      telefono: {
        type: DataTypes.STRING,
        allowNull: false
      },
      Email: {
        type: DataTypes.STRING,
        allowNull: false
      },
    }
);


