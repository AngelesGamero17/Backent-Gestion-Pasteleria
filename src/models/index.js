import {clienteModel } from "./clienteModel.js";
import {insumoModel} from "./insumoModel.js";
import {tipoEmpleadoModel} from "./tipoEmpleadoModel.js";
import {tipoInsumoModel} from "./tipoInsumoModel.js";
import {empleadoModel} from "./empleadoModel.js";
import {VentaProModel} from "./VentaProModel.js"
import {VentaInsModel} from "./VentaInsModel.js"

//relacion de tipo de insumo a insumo
tipoInsumoModel.hasMany(insumoModel, { foreignKey: "tipoInsumo", sourceKey: "ID" });
// insumoModel.hasOne(tipoInsumoModel );
// tipo empleado a empleado
tipoEmpleadoModel.hasMany(empleadoModel, { foreignKey: "tipoEmpleado", sourceKey: "ID" });
//empleadoModel.hasOne(tipoEmpleadoModel, { foreignKey: "tipoEmpleado", stargetId: "ID" });
//cliente a comprobante

VentaInsModel.hasMany(clienteModel, { foreignKey: "idCliente", sourceKey: "ID" });

VentaInsModel.hasMany(empleadoModel, { foreignKey: "idEmpleado", sourceKey: "ID" });

VentaProModel.hasMany(clienteModel, { foreignKey: "idCliente", sourceKey: "ID" });

VentaProModel.hasMany(empleadoModel, { foreignKey: "idEmpleado", sourceKey: "ID" });



