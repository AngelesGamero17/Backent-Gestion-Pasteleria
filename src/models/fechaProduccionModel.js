import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const fechaProduccionModel = sequelize.define("fechaProduccionModel", {
    ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      insumo: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      produccion: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
     
    }
);


