import { conexion } from "../db/conexion.js";

export class ModelUsers {
    //Informes si tiene 24 o no tiene 
static async getUsers(){
  try {
    const [rows] = await conexion.execute(
      `SELECT 
    u.nombre,
    u.dni,
    u.email,
    u.id,
    u.rol
    FROM 
    usuarios u
    WHERE
    u.rol = 'Analista';`
    );

    return {
      success: true,
      message: "Éxito obteniendo los usuarios",
      data: rows,
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: "Error interno al obtener los usuarios",
      error: error,
    };
  }
}






}