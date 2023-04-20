import jwt from "jsonwebtoken";
import config from "../config.js";
import { tokenVerificationErrors } from "../utils/tokenManager.js";

export const requireToken = (req, res, next) => {
  try {
    let token = req.headers?.authorization;
    if (!token) throw new Error("Token not found");
    token = token.split(" ")[1];
    const { ID } = jwt.verify(token, config.JWT_SECRET);
    req.empleado = ID;
    next();
  } catch (error) {
    const message = tokenVerificationErrors[error.message] || error.message;
    res.status(401).json({ message });
  }
};
