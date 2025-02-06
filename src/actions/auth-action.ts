"use server";
import { signIn } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { FormInputLoginZod, FormInputRegisterZod, registerSchemaZod} from "@/lib/type";
import { AuthError } from "next-auth";
import bcrypt from "bcryptjs";


export const loginAction = async(values:FormInputLoginZod)=>{
    try {
        await signIn("credentials", {
            email: values.email,
            password: values.password,
            redirect: false,
        });
        return { success: true };
    } catch (error) {
        if (error instanceof AuthError) {
            return { error: error.cause?.err?.message };
          }
          return { error: "error 500" };
    }
}

export const registerAction = async (values: FormInputRegisterZod) => {
    try {
        const {data, success} = registerSchemaZod.safeParse(values);
        if(!success){
            return {
                error: "Invalid data",
            }
        }

        // verificar si el usuario ya existe
        const user = await prisma.user.findUnique({
            where: {
                email: data.email,
            },
        });

        if(user){
            return {
                error: "User already exists",
            }
        }

        // hash de la contraseña
        const passwordHash = await bcrypt.hash(data.password, 10);

        // crear el usuario
        await prisma.user.create({
            data: {
                email: data.email,
                username: data.username,
                password: passwordHash,
                phone: data.phoneNumber
            }
        });

        await signIn("credentials", {
            email: data.email,
            username: data.username,
            password: data.password,
            phone:data.phoneNumber,
            redirect: false,
        });

        return { success: true };

    } catch (error) {
        if(error instanceof AuthError) {
            return { error: error.cause?.err?.message };
        }
        return { error: "error 500" };
    }
}