import { z } from "zod";

export const schemaNewSB = z.object({

    sabor: z.enum([
    "Mora",
    "Melocoton",
    "Fresa",
    "Kumis"
  ]),
  fecha_analisis: z.string().transform((str) => new Date(str)),
  fecha_toma_muestra: z.string().transform((str) => new Date(str)), 
  hora_toma_muestra: z.string(), 
  tanque: z.enum([
    "Tanque 7",
    "Tanque 9",
    "Tanque 10",
    "Tanque 12"
  ]), 
  lote: z.string(), 
  observaciones: z.string().optional(),
  responsable_analisis: z.number(), 
});

export function validarSBParcial(obj) {
  return schemaNewSB.partial().safeParse(obj);
}
export function validarNewSB(obj) {
  return schemaNewSB.safeParse(obj);
}
