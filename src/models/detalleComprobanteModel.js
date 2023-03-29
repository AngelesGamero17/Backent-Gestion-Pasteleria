import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const detalleComprobanteModel = sequelize.define("detalleComprobanteModel", {
    ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      producto:{
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      fechaProduccion: {
        type: DataTypes.TIME,
        allowNull: false,
      },
      estado: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      
    }
);
