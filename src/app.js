
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

//midellewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

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


import routerEmpleado from './routes/empleado.routes.js'
app.use('/api/v1/empleado', routerEmpleado)

import routerCliente from './routes/cliente.routes.js'
app.use('/api/v1/cliente', routerCliente)

import routerDetalleProducto from './routes/detalleCompProducto.routes.js'
app.use('/api/v1/detalleProducto', routerDetalleProducto)

import routerDetalleComprobante from './routes/detalleComprobante.routes.js'
app.use('/api/v1/detalleComprobante',routerDetalleComprobante )

import routerFamiliaProducto from './routes/familiaProducto.routes.js'
app.use('/api/v1/familiaProducto', routerFamiliaProducto)

import routerFechaProduccion from './routes/fechaProduccion.routes.js'
app.use('/api/v1/fechaProduccion', routerFechaProduccion)

import routerInsumo from './routes/insumo.routes.js'
app.use('/api/v1/insumo', routerInsumo)

import routerProduccion from './routes/produccion.routes.js'
app.use('/api/v1/produccion', routerProduccion)

import routerProducto from './routes/producto.routes.js'
app.use('/api/v1/producto', routerProducto)

import routerTipoEmpleado from './routes/tipoEmpleado.routes.js'
app.use('/api/v1/tipoEmpleado', routerTipoEmpleado)

import routerTipoInsumo from './routes/tipoInsumo.routes.js'
app.use('/api/v1/tipoInsumo', routerTipoInsumo)

import routerAuthLogin from './routes/login.routes.js'
app.use('/api/v1/login', routerAuthLogin)
export default app;
