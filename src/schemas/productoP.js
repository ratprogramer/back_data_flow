import { z } from "zod";

export const schemaNewPP = z.object({

  nombre_pp: z.enum([
    "Bebida semi elaborada",
    "Bebida pasteurizada",
    "Corte de bebida lactea",
  ]),
  fecha_analisis: z.string().transform((str) => new Date(str)),
  fecha_toma_muestra: z.string().transform((str) => new Date(str)), 
  hora_toma_muestra: z.string(), 
  lote: z.string(), 
  observaciones: z.string().optional(),
  responsable_analisis: z.number(), 
  punto_muestra: z.enum([
    "Tanque 7",
    "Tanque 9",
    "Tanque 10",
    "Tanque 12",
    "alternativo",
    "Fabricación", 
    "Pasteurizador"
  ]), 
  punto_alterno: z.string().optional()
});

export function validarPPParcial(obj) {
  return schemaNewPP.partial().safeParse(obj);
}
export function validarNewPP(obj) {
  return schemaNewPP.safeParse(obj);
}
