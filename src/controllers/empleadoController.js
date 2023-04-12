import { empleadoModel } from "../models/empleadoModel.js";
import { encriptarContrasena } from "../libs/encryptPassword.js";

export const getEmpleado = async (req, res) => {
  try {
    const empleado = await empleadoModel.findAll();
    res.status(200).json(empleado);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const createEmpleado = async (req, res) => {
  try {
    let { ID, nomEmp, apellEmp, email, password, fecNac, direccEmp, telefono, ingreso, tipoEmpleado } = req.body;
    //if (empleado) {
    //  return res.status(400).json({ message: "Empleado ya existe" });
    //}

    password = await encriptarContrasena(password)

    const nuevoempleado = await empleadoModel.create({
      ID,
      nomEmp,
      apellEmp,
      email,
      password,
      fecNac,
      direccEmp,
      telefono,
      ingreso,
      tipoEmpleado
    });
    res.status(201).json({
      message: "empleado creado Correctamente",
      data: nuevoempleado,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getOneEmpleado = async (req, res) => {
  try {
    const { ID } = req.params;
    const empleado = await empleadoModel.findOne({ where: { ID } });
    if (!empleado)
      return res.status(404).json({ message: "empleado no encontrado" });
    res.status(200).json(empleado);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteEmpleado = async (req, res) => {
  try {
    const { ID } = req.params;
    const empleado = await empleadoModel.findOne({ where: { ID } });
    if (!empleado)
      return res.status(404).json({ message: "empleado no encontrado" });
    await empleadoModel.destroy({ where: { ID } });
    res.status(200).json({ message: "empleado eliminado Satisfactoriamente" });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateEmpleado = async (req, res) => {
  try {
    const { ID } = req.params;
    let { nomEmp, apellEmp, email, password, fecNac, direccEmp, telefono, ingreso, tipoEmpleado } = req.body;
    const empleado = await empleadoModel.findOne({ where: { ID } });
    if (!empleado) {
      return res.status(404).json({ message: "empleado no encontrado" });
    }
    password = await encriptarContrasena(password)
    console.log(password)
    await empleadoModel.update({ nomEmp, apellEmp, email, password, fecNac, direccEmp, telefono, ingreso, tipoEmpleado }, { where: { ID } });
    res.status(200).json({ message: "Empleado actualizado Correctamente" });
  } catch (error) {
    console.log(error)
    res.status(500).json(error);
  }
};

