import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const produccionModel = sequelize.define("produccionModel", {
    ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      empleado: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      fechaProduccion: {
        type: DataTypes.TIME,
        allowNull: false
      },
      estado: {
        type: DataTypes.STRING,
        allowNull: false
      },

    }
);


