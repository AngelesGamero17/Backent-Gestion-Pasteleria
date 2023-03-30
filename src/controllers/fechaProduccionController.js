import { fechaProduccionModel } from "../models/fechaProduccionModel.js";

export const getFechaProduccion = async (req, res) => {
  try {
    const fechaProduccion = await fechaProduccionModel.findAll();
    res.status(200).json(fechaProduccion);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const createFechaProduccion = async (req, res) => {
  try {
    const { ID,insumo,produccion,cantidad } = req.body;
    //if (cliente) {
    ///  return res.status(400).json({ message: "fechaProduccion ya existe" });
    //}
    const nuevofechaProduccion = await fechaProduccionModel.create({
      ID,
      insumo,
      produccion,
      cantidad
    });
    res.status(201).json({
      message: "fechaProduccion creado Correctamente",
      data: nuevofechaProduccion,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getOneFechaProduccion = async (req, res) => {
  try {
    const { ID } = req.params;
    const fechaProduccion = await fechaProduccionModel.findOne({ where: { ID } });
    if (!fechaProduccion)
      return res.status(404).json({ message: "fechaProduccion no encontrado" });
    res.status(200).json(fechaProduccion);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteFechaProduccion = async (req, res) => {
  try {
    const { ID } = req.params;
    const fechaProduccion = await fechaProduccionModel.findOne({ where: { ID } });
    if (!fechaProduccion)
      return res.status(404).json({ message: "fechaProduccion no encontrado" });
    await fechaProduccionModel.destroy({ where: { ID } });
    res.status(200).json({ message: "fechaProduccion eliminado Satisfactoriamente" });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateFechaProduccion = async (req, res) => {
  try {
    const { ID } = req.params;
    const { insumo,produccion,cantidad } = req.body;
    const fechaProducccion = await fechaProduccionModel.findOne({ where: { ID } });
    if (!fechaProducccion)
      return res.status(404).json({ message: "fechaProducccion no encontrado" });
    await fechaProduccionModel.update({ insumo,produccion,cantidad  }, { where: { ID } });
    res.status(200).json({ message: "fechaProduccion actualizado Correctamente" });
  } catch (error) {
    res.status(500).json(error);
  }
};

