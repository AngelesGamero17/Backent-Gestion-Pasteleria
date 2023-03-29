import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const insumoModel = sequelize.define("insumoModel", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nombreInsumo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      stkInsumo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      fechaVen: {
        type: DataTypes.TIME,
        allowNull: false,
      },
      fecCompra: {
        type: DataTypes.TIME,
        allowNull: false,
      },
      tipoInsumo: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      precioInsumo: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      
     
    }
);


