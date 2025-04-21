import {z} from 'zod';

export const schemaNewPT = z.object({
    fecha_analisis: z.string().transform((str) => new Date(str)),
    fecha_env: z.string().transform((str) => new Date(str)),
    fecha_vencimiento: z.string().transform((str) => new Date(str)),
    hora_empaque: z.string(),
    lote: z.string(),
    maquina_envasadora: z.enum(['M1', 'M2', 'M3', 'M4']),
    observaciones: z.string().optional(),
    presentacion: z.enum(['1000 ml', '200 ml']),
    ref: z.enum(['Mora','Melocoton', 'Fresa', 'Kumis']),
    responsable_analisis: z.number(),
    id_pp: z.number()
})

/* 
CREATE TABLE producto_terminado (
	id VARCHAR(255) PRIMARY KEY,
    fecha_analisis DATE DEFAULT (CURRENT_DATE),
    fecha_env DATE DEFAULT (CURRENT_DATE),
    fecha_vencimiento DATE,
    ref VARCHAR(100),
    presentacion ENUM('1000', '200'),
    lote VARCHAR(100),
    hora_empaque TIME,
    maquina_envasadora ENUM('m1', 'm2', 'm3', 'm4'),
    observaciones VARCHAR(255) NULL,
    responsable_analisis INT,
    id_pp INT,
    FOREIGN KEY (responsable_analisis) REFERENCES usuarios(id),
    FOREIGN KEY (id_pp) REFERENCES producto_proceso(id)
);
*/
export function validarNewPT(obj) {
    return schemaNewPT.safeParse(obj)
};