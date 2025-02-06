import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "./prisma"
import authConfig from "../../auth.config"
 

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  ...authConfig,
  callbacks: {
    // jwt() se ejecuta cada vez que se crea o actualiza un token JWT.
    // Aqui es donde puedes agregar informacion adicional al token.
    jwt({ token, user }) {
      if (user) { // User is available during sign-in
        token.role = user.role;
      }
      return token
    },
    // session() se actualiza para agregar la información del token a la 
    // sesión del usuario,
    // lo que hace que este disponible en el cliente
    session({ session, token }) {
      if(session.user) {
        session.user.role = token.role;
      }
      return session
    },
  },
})