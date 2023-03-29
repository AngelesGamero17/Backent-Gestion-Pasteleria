import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { detalleComprobanteModel } from "./detalleComprobanteModel.js";
import { productoModel } from "./productoModel.js";

export const detalleCompProducModel = sequelize.define("detalleCompProducModel", {
    idDeComp: {
        type: DataTypes.INTEGER,
        references: {
          model: detalleComprobanteModel,
          key: 'ID'
        }
      },
    idPro: {
        type: DataTypes.INTEGER,
        references: {
          model: productoModel,
          key: 'ID'
        }
      },
       }
     );