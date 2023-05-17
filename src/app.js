
import express from 'express';
import config from "./config.js";
import indexRouter from "./routes/index.routes.js";
import clienteRouter from "./routes/cliente.routes.js";
import empleadoRouter from "./routes/empleado.routes.js";
import insumoRouter from "./routes/insumo.routes.js";
import productoRouter from "./routes/producto.routes.js";
import tipoEmpleadoRouter from "./routes/tipoEmpleado.routes.js";
import tipoInsumoRouter from "./routes/tipoInsumo.routes.js";
import VentaInsumoRouter from "./routes/ventaIns.routes.js";
import VentaProductoRouter from "./routes/ventaPro.routes.js"
import loginRouter from "./routes/login.routes.js"
import path from 'path';
const __dirname = path.resolve();

const app =  express();
import cors from 'cors';
app.use(cors());
app.use(cors({
    origin: 'http://localhost:3000'
}));

//midellewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.set("port" , config.APP_PORT);
app.set("host", config.APP_HOST);

//routes
app.use("/", indexRouter);
app.use(`/api/${config.API_VERSION}/cliente`, clienteRouter);
app.use(`/api/${config.API_VERSION}/empleado`, empleadoRouter);
app.use(`/api/${config.API_VERSION}/insumo`, insumoRouter);
app.use(`/api/${config.API_VERSION}/producto`, productoRouter);
app.use(`/api/${config.API_VERSION}/tipoEmpleado`, tipoEmpleadoRouter);
app.use(`/api/${config.API_VERSION}/tipoInsumo`, tipoInsumoRouter);
app.use(`/api/${config.API_VERSION}/ventaInsumo`, VentaInsumoRouter);
app.use(`/api/${config.API_VERSION}/ventaProducto`, VentaProductoRouter);
app.use(`/api/${config.API_VERSION}/login`, loginRouter);

//export

import routerEmpleado from './routes/empleado.routes.js'
app.use('/api/v1/empleado', routerEmpleado)
import routerCliente from './routes/cliente.routes.js'
app.use('/api/v1/cliente', routerCliente)
import routerInsumo from './routes/insumo.routes.js'
app.use('/api/v1/insumo', routerInsumo)
import routerProducto from './routes/producto.routes.js'
app.use('/api/v1/producto', routerProducto)
import routerTipoEmpleado from './routes/tipoEmpleado.routes.js'
app.use('/api/v1/tipoEmpleado', routerTipoEmpleado)
import routerTipoInsumo from './routes/tipoInsumo.routes.js'
app.use('/api/v1/tipoInsumo', routerTipoInsumo)
import routerVentaInsumo from './routes/ventaIns.routes.js'
app.use('/api/v1/ventaInsumo', routerVentaInsumo)
import routerVentaProducto from './routes/ventaPro.routes.js'
app.use('/api/v1/ventaProducto', routerVentaProducto)
import routerAuthLogin from './routes/login.routes.js'
app.use('/api/v1/login', routerAuthLogin)



export default app;