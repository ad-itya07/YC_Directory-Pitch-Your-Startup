import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    id: string,
    _id: string;
  }

  interface JWT {
    id: string;
  }
}