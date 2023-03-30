import { empleadoModel } from "../models/empleadoModel.js";

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
    const { ID,nomEmp,apellEmp,fecNac,direccEmp,telefono,ingreso,tipoEmpleado } = req.body;
    //if (empleado) {
    //  return res.status(400).json({ message: "Empleado ya existe" });
    //}
    const nuevoempleado = await empleadoModel.create({
      ID,
      nomEmp,
      apellEmp,
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
    const { nomEmp,apellEmp,fecNac,direccEmp,telefono,ingreso,tipoEmpleado} = req.body;
    const empleado = await empleadoModel.findOne({ where: { ID } });
    if (!empleado)
      return res.status(404).json({ message: "empleado no encontrado" });
    await empleadoModel.update({ nomEmp,apellEmp,fecNac,direccEmp,telefono,ingreso,tipoEmpleado }, { where: { ID } });
    res.status(200).json({ message: "empleado actualizado Correctamente" });
  } catch (error) {
    res.status(500).json(error);
  }
};

