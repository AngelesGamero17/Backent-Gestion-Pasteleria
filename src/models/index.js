import { clienteModel } from "./clienteModel.js";
import {comprobanteModel} from "./comprobanteModel.js";
import {detalleComprobanteModel} from "./detalleComprobanteModel.js";
import {familiaProductoModel} from "./familiaProductoModel.js";
import {fechaProduccionModel} from "./fechaProduccionModel.js"; 
import {insumoModel} from "./insumoModel.js";
import {produccionModel} from "./produccionModel.js";
import { productoModel} from "./productoModel.js";
import {tipoEmpleadoModel} from "./tipoEmpleadoModel.js";
import {tipoInsumoModel} from "./tipoInsumoModel.js";
import {empleadoModel} from "./empleadoModel.js";


//relacion de tipo de insumo a insumo
tipoInsumoModel.hasMany(insumoModel, { foreignKey: "tipoInsumo", sourceKey: "ID" });
insumoModel.hasOne(tipoInsumoModel, { foreignKey: "tipoInsumo", stargetId: "ID" });
// tipo empleado a empleado
tipoEmpleadoModel.hasMany(empleadoModel, { foreignKey: "tipoEmpleado", sourceKey: "ID" });
empleadoModel.hasOne(tipoEmpleadoModel, { foreignKey: "tipoEmpleado", stargetId: "ID" });
//cliente a comprobante
clienteModel.hasMany(comprobanteModel, { foreignKey: "cliente", sourceKey: "ID" });
comprobanteModel.belongsTo(clienteModel, { foreignKey: "cliente", stargetId: "ID" });
// familiaproducto a producto 
familiaProductoModel.hasMany(productoModel, { foreignKey: "familiaProducto", sourceKey: "ID" });
productoModel.hasOne(familiaProductoModel, { foreignKey: "familiaProducto", stargetId: "ID" });
//insumo a fechaProduccion
fechaProduccionModel.hasMany(insumoModel, { foreignKey: "fechaProduccion", sourceKey: "ID" });
insumoModel.hasOne(fechaProduccionModel, { foreignKey: "fechaProduccion", stargetId: "ID" });
//produccion a fecha de produccion
produccionModel.hasMany(fechaProduccionModel, { foreignKey: "produccion", sourceKey: "ID" });
fechaProduccionModel.hasOne(produccionModel, { foreignKey: "produccion", stargetId: "ID" });
//producto a detalleComprobante
productoModel.belongsToMany(detalleComprobanteModel, { foreignKey: "producto", sourceKey: "ID" });
detalleComprobanteModel.belongsToMany(productoModel, { foreignKey: "producto", stargetId: "ID" });
//detalleComprobante a Comprobante
detalleComprobanteModel.belongsTo(comprobanteModel, { foreignKey: "detalleComprobante", stargetId: "ID" });
comprobanteModel.belongsTo(detalleComprobanteModel, { foreignKey: "detalleComprobante", stargetId: "ID" });
//empleado a comprobante
empleadoModel.belongsToMany(comprobanteModel, { foreignKey: "empleado", sourceKey: "ID" });
comprobanteModel.hasOne(empleadoModel, { foreignKey: "empleado", stargetId: "ID" });
//empleado a produccion
produccionModel.belongsToMany(detalleComprobanteModel, { foreignKey: "produccion", sourceKey: "ID" });
detalleComprobanteModel.hasOne(produccionModel, { foreignKey: "produccion", stargetId: "ID" });
