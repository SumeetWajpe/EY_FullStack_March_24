import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const {
  auth,
  handlers: { GET, POST },
} = NextAuth({
  providers: [
    CredentialsProvider({
      name: "User Credentials",
      credentials: {
        username: { type: String, required: true },
        password: { type: String, required: true },
      },
      authorize: async credentials => {
        // data fetch
        const user = { id: 1, name: "sumeet", password: "admin" }; // db
        if (
          credentials?.username === user.name &&
          credentials?.password === user.password
        ) {
          return user;
        } else return null;
      },
    }),
  ],
  secret: process.env.AUTH_SECRET,
});
