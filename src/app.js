
import express from 'express';
import config from "./config.js";
import indexRouter from "./routes/index.routes.js";
import clienteRouter from "./routes/cliente.routes.js";
import detalleCompProductoRouter from "./routes/detalleCompProducto.routes.js";
import detalleComprobanteRouter from "./routes/detalleComprobante.routes.js";
import empleadoRouter from "./routes/empleado.routes.js";
import familiaProductoRouter from "./routes/familiaProducto.routes.js";
import fechaProduccionRouter from "./routes/fechaProduccion.routes.js";
import insumoRouter from "./routes/insumo.routes.js";
import produccionRouter from "./routes/produccion.routes.js";
import productoRouter from "./routes/produccion.routes.js";
import tipoEmpleadoRouter from "./routes/tipoEmpleado.routes.js";
import tipoInsumoRouter from "./routes/tipoInsumo.routes.js";


const app =  express();

app.set("port" , config.APP_PORT);
app.set("host", config.APP_HOST);

//routes
app.use("/", indexRouter);
app.use(`/api/${config.API_VERSION}/cliente`, clienteRouter);
app.use(`/api/${config.API_VERSION}/detalleCompProducto`, detalleCompProductoRouter);
app.use(`/api/${config.API_VERSION}/detalleComprobante`, detalleComprobanteRouter);
app.use(`/api/${config.API_VERSION}/empleado`, empleadoRouter);
app.use(`/api/${config.API_VERSION}/familiaProducto`, familiaProductoRouter);
app.use(`/api/${config.API_VERSION}/fechaProduccion`, fechaProduccionRouter);
app.use(`/api/${config.API_VERSION}/insumo`, insumoRouter);
app.use(`/api/${config.API_VERSION}/produccion`, produccionRouter);
app.use(`/api/${config.API_VERSION}/producto`, productoRouter);
app.use(`/api/${config.API_VERSION}/tipoEmpleado`, tipoEmpleadoRouter);
app.use(`/api/${config.API_VERSION}/tipoInsumo`, tipoInsumoRouter);

//export
export default app;
