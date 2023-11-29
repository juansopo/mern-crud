import Socio from "../models/socio.model.js";

export const getSocios = async (req, res) => {
  const socios = await Socio.find({
    user: req.user._id,
  });
  res.json(socios);
};
export const getSocio = async (req, res) => {
  const socio = await Socio.findById(req.params.id).populate("user");
  if (!socio) res.status(404).json({ message: "socio no encontrado" });
  res.json(socio);
};
export const createSocio = async (req, res) => {
  const { nroorden, nombre, email } = req.body;
  console.log(nroorden, nombre, email)

  const socioNombre = await Socio.findOne({ nombre });
  if (socioNombre) return res.status(401).json(["El nombre ya esta en uso"]);

  const socioEmail = await Socio.findOne({ email });
  if (socioEmail) return res.status(401).json(["El email ya esta en uso"]);

  const socioNroorden = await Socio.findOne({ nroorden });
  if (socioNroorden) return res.status(401).json(["El numero de orden esta en uso"]);

  const newSocio = new Socio({
    nroorden,
    nombre,
    email,
    user: req.user.id,
  });
  const savedSocio = await newSocio.save();
  res.json(savedSocio);
};
export const deleteSocio = async (req, res) => {
  const socio = await Socio.findByIdAndDelete(req.params.id);
  if (!socio) res.status(404).json({ message: "socio no encontrado" });
  return res.status(204);
};
export const updateSocio = async (req, res) => {
  const socio = await Socio.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!socio) res.status(404).json({ message: "socio no encontrado" });
  res.json(socio);
};
