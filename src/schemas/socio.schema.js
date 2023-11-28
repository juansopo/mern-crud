import { z } from "zod";

export const createSocioSchema = z.object({
  nroorden: z.string({
    required_error: "NroOrden requerido",
  }),
  nombre: z.string({
    required_error: "Nombre required",
  }),
  email: z
    .string({
      required_error: "Email requerido",
    })
    .email({
      message: "Email invalido",
    }),
});
