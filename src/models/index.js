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
import { detalleCompProducModel } from "./detalleCompProducModel.js";


//relacion de tipo de insumo a insumo
tipoInsumoModel.hasMany(insumoModel, { foreignKey: "tipoInsumo", sourceKey: "ID" });
// insumoModel.hasOne(tipoInsumoModel );
// tipo empleado a empleado
tipoEmpleadoModel.hasMany(empleadoModel, { foreignKey: "tipoEmpleado", sourceKey: "ID" });
//empleadoModel.hasOne(tipoEmpleadoModel, { foreignKey: "tipoEmpleado", stargetId: "ID" });
//cliente a comprobante
clienteModel.hasMany(comprobanteModel, { foreignKey: "cliente", sourceKey: "ID" });
//comprobanteModel.belongsTo(clienteModel, { foreignKey: "cliente", stargetId: "ID" });
// familiaproducto a producto 
familiaProductoModel.hasMany(productoModel, { foreignKey: "familiaProducto", sourceKey: "ID" });
//roductoModel.hasOne(familiaProductoModel, { foreignKey: "familiaProducto", stargetId: "ID" });
//insumo a fechaProduccion
insumoModel.hasMany(fechaProduccionModel, { foreignKey: "fechaProduccion", sourceKey: "ID" });
//fechaProduccionModel.hasOne(insumoModel, { foreignKey: "fechaProduccion", stargetId: "ID" });
//produccion a fecha de produccion
produccionModel.hasMany(fechaProduccionModel, { foreignKey: "produccion", sourceKey: "ID" });
//fechaProduccionModel.hasOne(produccionModel, { foreignKey: "produccion", stargetId: "ID" });
//producto a detalleComprobante
productoModel.belongsToMany(detalleComprobanteModel, { through: detalleCompProducModel });
detalleComprobanteModel.belongsToMany(productoModel, { through: detalleCompProducModel});
//detalleComprobante a Comprobante
detalleComprobanteModel.belongsTo(comprobanteModel);
//comprobanteModel.belongsTo(detalleComprobanteModel );
//empleado a comprobante
empleadoModel.belongsTo(comprobanteModel);
//comprobanteModel.hasOne(empleadoModel, { foreignKey: "empleado", stargetId: "ID" });
//empleado a produccion
empleadoModel.belongsTo(produccionModel, { foreignKey: "produccion", sourceKey: "ID" });
//detalleComprobanteModel.hasOne(produccionModel, { foreignKey: "produccion", stargetId: "ID" });

//relacion uno a uno empleado usuario

