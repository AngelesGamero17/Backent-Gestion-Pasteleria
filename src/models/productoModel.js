import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const productoModel = sequelize.define("productoModel", {
    ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      descripPro: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      precio: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      familiaProducto: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      
      
    }
);


