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
tipoInsumo.hasMany(insumo, { foreignKey: "tipoInsumo", sourceKey: "ID" });
insumo.hasOne(tipoInsumo, { foreignKey: "tipoInsumo", stargetId: "ID" });
// tipo empleado a empleado
tipoEmpleado.hasMany(empleado, { foreignKey: "tipoEmpleado", sourceKey: "ID" });
empleado.hasOne(tipoEmpleado, { foreignKey: "tipoEmpleado", stargetId: "ID" });
//cliente a comprobante
cliente.hasMany(comprobante, { foreignKey: "cliente", sourceKey: "ID" });
comprobante.belongsTo(cliente, { foreignKey: "cliente", stargetId: "ID" });
// familiaproducto a producto 
familiaProducto.hasMany(producto, { foreignKey: "familiaProducto", sourceKey: "ID" });
producto.hasOne(familiaProducto, { foreignKey: "familiaProducto", stargetId: "ID" });
//insumo a fechaProduccion
fechaProduccion.hasMany(insumo, { foreignKey: "fechaProduccion", sourceKey: "ID" });
insumo.hasOne(fechaProduccion, { foreignKey: "fechaProduccion", stargetId: "ID" });
//produccion a fecha de produccion
produccion.hasMany(fechaProduccion, { foreignKey: "produccion", sourceKey: "ID" });
fechaProduccion.hasOne(produccion, { foreignKey: "produccion", stargetId: "ID" });
//producto a detalleComprobante
producto.belongsToMany(detalleComprobante, { foreignKey: "producto", sourceKey: "ID" });
detalleComprobante.belongsToMany(producto, { foreignKey: "producto", stargetId: "ID" });
//detalleComprobante a Comprobante
detalleComprobante.belongsTo(comprobante, { foreignKey: "detalleComprobante", stargetId: "ID" });
comprobante.belongsTo(detalleComprobante, { foreignKey: "detalleComprobante", stargetId: "ID" });
//empleado a comprobante
empleado.belongsToMany(comprobante, { foreignKey: "empleado", sourceKey: "ID" });
comprobante.hasOne(empleado, { foreignKey: "empleado", stargetId: "ID" });
//empleado a produccion
produccion.belongsToMany(detalleComprobante, { foreignKey: "produccion", sourceKey: "ID" });
detalleComprobante.hasOne(produccion, { foreignKey: "produccion", stargetId: "ID" });
