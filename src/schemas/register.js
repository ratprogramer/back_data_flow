import {z} from 'zod';

export const schemaRegister = z.object({
  dni: z.string(),
  nombre: z.string(),
  rol: z.enum(['Administrador','Analista']),
  contraseña :z.string(),
  email: z.string().email()
  
})


export function validarRegister(obj) {
    return schemaRegister.safeParse(obj)
};