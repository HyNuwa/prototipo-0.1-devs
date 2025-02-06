import { z } from "zod";

/*export type FormInputLogin = {
    username: string,
    email: string,
    phoneNumber: string,
    password: string,
    confirmPassword: string,
    checkbox?: boolean
}; */ //Es lo mismo que FormInputLoginZod solo que de forma manual digamos 


export const registerSchemaZod = z.
object({
    username: z.string({ required_error: "username requerido" })
    .min(4, { message: "El nombre debe tener al menos 4 caracteres" })
    .max(20, { message: "El nombre no puede tener más de 20 caracteres" }),
    email: z.string({ required_error: "email requerido" })
    .email( {message: "Email Invalido"}),
    phoneNumber: z.string( {message: "Nro. Celular invalido"})
    .min(7, { message: "El número debe tener al menos 7 dígitos" })
    .max(15, { message: "El número no puede tener más de 15 dígitos" }),
    password: z.string( { required_error: "Contraseña requerida" } )
    .min(7, { message: "La clave debe tener al menos 7 dígitos" })
    .max(32, { message: "La clave no puede tener más de 32 dígitos" }),
    confirmPassword: z.string( { required_error: "Confirmar contraseña requerido"} ),
    checkbox: z.boolean().optional()
})
.refine((data) => data.password === data.confirmPassword, {
    message: "Las contraseñas deben ser iguales",
    path: ["confirmPassword"]
});

export type FormInputRegisterZod = z.infer<typeof registerSchemaZod>;

export const loginSchemaZod = z
.object({
    email: z.string({ required_error: "Email es requerido" }).email({ message: "email invalido" }),
    password: z.string({ required_error: "Contraseña requerida" })
    .min(7, { message: "La clave debe tener al menos 7 dígitos" })
    .max(32, { message: "La clave no puede tener más de 32 dígitos" }),
    checkbox: z.boolean().optional()
}).refine((data) => data.email && data.password, {
    message: "Login o contraseña incorrecta",
    path: ["identifier"], // Puedes poner "password" o ambos, pero en general se usa en el campo principal
});

export type FormInputLoginZod = z.infer<typeof loginSchemaZod>;