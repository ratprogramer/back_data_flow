import {z} from 'zod';

export const schemaNewR = z.object({
    fecha_5d: z.string().transform((str) => new Date(str)),
    observaciones: z.string().optional(),
    responsable_analisis_5: z.number(),
    mohos_ley: z.string(),
    id_pp: z.number().optional(),
    id_pt: z.string().optional(),
    id_sb: z.number().optional()

})
export function validarNewRUpdate(obj) {
    return schemaNewR.safeParse(obj)
};