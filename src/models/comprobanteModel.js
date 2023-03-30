import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const comprobanteModel = sequelize.define("comprobanteModel", {
    ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      empleado: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      fechaComp: {
        type: DataTypes.DATE,
        allowNull: false
      },
      cliente: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      estadoComp: {
        type: DataTypes.STRING,
        allowNull: false
      },
      detalleComprobante: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
    }
);


