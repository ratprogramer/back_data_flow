import { validarRegister } from "../schemas/register.js";
import { serviceUser } from "../services/servicesU.js";
import { sendEmail } from "../helpers/sendEmail.js";

export let register = async (req, res) => {
    try{

        const result = validarRegister(req.body)
        if (result.error){
            res.status(422).json({ success: false, message: "Error interno",  error: result.error});
        }else{
            
            let nuevoR = req.body
            let contraseña = req.body.contraseña
            const nuevo = await serviceUser.hashRegister(nuevoR)
            
            res.status(200).json({ success: true, messaje:'Creado con exito',dni:nuevoR.dni})
            await sendEmail({
                email: nuevoR.email,
                dni: nuevoR.dni,
                contraseña: contraseña
            });
            
        }
    } catch (err) {
        res
            .status(500)
            .json({ success: false, message: "Error interno", error: err });
    }
};