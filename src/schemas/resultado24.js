import {z} from 'zod';

export const schemaNewR = z.object({
    fecha_24h: z.string().transform((str) => new Date(str)),
    e_coli: z.string(),
    coliformes: z.string(),
    observaciones: z.string().optional(),
    cabina: z.enum(['C','NC']),
    medio_cultivo: z.enum(['C','NC']),
    responsable_analisis_24: z.number(),
    id_pp: z.number().optional(),
    id_pt: z.string().optional(),
    id_sb: z.number().optional()
})
export function validarNewR(obj) {
    return schemaNewR.safeParse(obj)
};
