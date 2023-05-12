import { familiaProductoModel } from "../models/familiaProductoModel.js";

export const getFamiliaProducto = async (req, res) => {
  try {
    const respuesta = await familiaProductoModel.findAll();
    res.status(200).json(respuesta);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const createFamiliaProducto = async (req, res) => {
  try {
    const { ID,descripcion } = req.body;
    //if (familiaProducto) {
    //  return res.status(400).json({ message: "familiaProducto ya existe" });
    //}
    const nuevofamiliaProducto = await familiaProductoModel.create({
      ID,
      descripcion
    });
    res.status(201).json({
      message: "familiaProducto creado Correctamente",
      data: nuevofamiliaProducto,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getOneFamiliaProducto = async (req, res) => {
  try {
    const { ID } = req.params;
    const familiaProducto = await familiaProductoModel.findOne({ where: { ID } });
    if (!familiaProducto)
      return res.status(404).json({ message: "familiaProducto no encontrado" });
    res.status(200).json(familiaProducto);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteFamiliaProducto = async (req, res) => {
  try {
    const { ID } = req.params;
    const familiaProducto = await familiaProductoModel.findOne({ where: { ID } });
    if (!familiaProducto)
      return res.status(404).json({ message: "familiaProducto no encontrado" });
    await familiaProductoModel.destroy({ where: { ID } });
    res.status(200).json({ message: "FamiliaProducto eliminado Satisfactoriamente" });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateFamiliaProducto = async (req, res) => {
  try {
    const { ID } = req.params;
    const { descripcion  } = req.body;
    const familiaProducto = await familiaProductoModel.findOne({ where: { ID } });
    if (!familiaProducto)
      return res.status(404).json({ message: "familiaProducto no encontrado" });
    await familiaProductoModel.update({ descripcion  }, { where: { ID } });
    res.status(200).json({ message: "familiaProducto actualizado Correctamente" });
  } catch (error) {
    res.status(500).json(error);
  }
};

