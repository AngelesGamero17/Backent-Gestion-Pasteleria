import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const detalleCompProducModel = sequelize.define("detalleCompProducModel", {
    idDeComp: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
    idPro: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
       }
     );