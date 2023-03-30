import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const familiaProductoModel = sequelize.define("familiaProductoModel", {
    ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      descripcion: {
        type: DataTypes.STRING,
        allowNull: false
      },
      
    }
);


