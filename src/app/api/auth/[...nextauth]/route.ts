import { authOptions } from "@/app/lib/auth";
import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
