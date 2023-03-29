import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const empleadoModel = sequelize.define("empledoModel", {
    ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nomEmp: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      apellEmp: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      fecNac: {
        type: DataTypes.TIME,
        allowNull: false,
      },
      direccEmp: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      telefono: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      ingreso: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      tipoEmpleado: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    }
);


