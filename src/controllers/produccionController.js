import { produccionModel } from "../models/produccionModel.js";

export const getProduccion = async (req, res) => {
  try {
    const produccion = await produccionModel.findAll();
    res.status(200).json(produccion);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const createProduccion = async (req, res) => {
  try {
    const { ID,empleado,fechaProduccion,estado} = req.body;
    if (produccion) {
      return res.status(400).json({ message: "produccion ya existe" });
    }
    const nuevoproduccion = await produccionModel.create({
      ID,
      empleado,
      fechaProduccion,
      estado
    });
    res.status(201).json({
      message: "produccion creado Correctamente",
      data: nuevoproduccion,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getOneProduccion = async (req, res) => {
  try {
    const { ID } = req.params;
    const produccion = await produccionModel.findOne({ where: { ID } });
    if (!produccion)
      return res.status(404).json({ message: "produccion no encontrado" });
    res.status(200).json(produccion);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteProduccion = async (req, res) => {
  try {
    const { ID } = req.params;
    const produccion = await produccionModel.findOne({ where: { ID } });
    if (!produccion)
      return res.status(404).json({ message: "produccion no encontrado" });
    await produccionModel.destroy({ where: { ID } });
    res.status(200).json({ message: "produccion eliminado Satisfactoriamente" });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateProduccion = async (req, res) => {
  try {
    const { ID } = req.params;
    const { empleado,fechaProduccion,estado } = req.body;
    const produccion = await produccionModel.findOne({ where: { ID } });
    if (!produccion)
      return res.status(404).json({ message: "produccion no encontrado" });
    await produccionModel.update({empleado,fechaProduccion,estado}, { where: { ID } });
    res.status(200).json({ message: "produccion actualizado Correctamente" });
  } catch (error) {
    res.status(500).json(error);
  }
};
