import Jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
export async function validarAdministrador(req, res, next) {
  const token = req.header("Authorization")?.split(" ")[1];
  if (!token) {
    return res.status(403).json({success: false, message:"Acceso denegado, falta el token" });
  }

  const key = process.env.KEY_ADMINISTRADOR;
  try {
    const verificar = Jwt.verify(token, key);

    next();
  } catch(err) {
    return res
      .status(403)
      .json({success: false, message:"Acceso denegado, token invalido o expirado" });
  }
}
