import { NextApiRequest, NextApiResponse } from "next";
import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import conectarDB from "../../../db/conexionDB";
import Administrador from "../../../models/Administrador";
//https://next-auth.js.org/configuration/options

const autenticacion = async (email: string, password: string) => {
  try {
    conectarDB();
    const administrador = await Administrador.findOne({ email });
    if (!administrador) {
      return null;
    }
    const match: boolean = await administrador.matchPassword(password);
    if (match) {
      return administrador;
    }
    return null;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const options: NextAuthOptions = {
    providers: [
      CredentialsProvider({
        id: "local",
        name: "local",
        credentials: {
          email: { label: "Email" },
          password: { label: "Password" },
        },
        authorize: async (credentials) => {
          const email: string = credentials ? credentials.email : "";
          const password: string = credentials ? credentials.password : "";

          return await autenticacion(email, password);
        },
      }),
    ],
    // callbacks: {
    //   jwt: async ({ token, user }) => {
    //     if (user) {
    //       token.id = user.id;
    //     }
    //     return token;
    //   },

    //   session: async ({ session, token }) => {
    //     if (token) {
    //       session.id = token.id;
    //     }
    //     return session;
    //   },
    // },

    secret: process.env.SECRET || "my-secret", //process.env.SECRET,
    // jwt: {
    //   secret: "my-secret", //process.env.JWT_SECRET,
    // },
    pages: {
      signIn: "/signin",
    },
  };
  return await NextAuth(req, res, options);
};

export default handler;
