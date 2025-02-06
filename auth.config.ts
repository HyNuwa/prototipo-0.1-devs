//import GitHub from "next-auth/providers/github"
import { prisma } from "@/lib/prisma";
import { loginSchemaZod } from "@/lib/type"
import type { NextAuthConfig } from "next-auth"
import Credentials from "next-auth/providers/credentials"
import bcrypt from "bcryptjs";
import { nanoid } from "nanoid";
 
// Notice this is only an object, not a full Auth.js instance
export default {
    providers: [
        Credentials({
          authorize: async (credentials) => {
            const {data,success} = loginSchemaZod.safeParse(credentials);
            
            if(!success){
              throw new Error("Invalid credentials")
            }

            // verificar si existe el usuario en la base de datos
            const user = await prisma.user.findUnique({
              where: {
                email: data.email,
              }
            });            

            if (!user || !user.password){
              throw new Error("No user found");
            }

            // verificar si la contraseña es correcta
            const isValid = await bcrypt.compare(data.password, user.password);
            
            if(!isValid) {
              throw new Error("Incorrect password");
            }

            // verificacion de email
            /*if(!user.emailVerified) {
              const verifyTokenExits = await prisma.verificationToken.findFirst({
                where: {
                  identifier: user.email
                }
              })

              // si existe un token, lo eliminamos
              if(verifyTokenExits?.identifier){
                await prisma.verificationToken.delete({
                  where: {
                    identifier: user.email,
                  }
                })
              }
              
              const token = nanoid()
  
              await prisma.verificationToken.create({
                data: {
                  identifier: user.email,
                  token,
                  expires: new Date(Date.now() + 1000 * 60 * 60 * 24)
                }
              })

              //enviar email de verificación
              throw new Error("Email send verification");
            }*/



            return user;
          },
        }),
      ],
} satisfies NextAuthConfig