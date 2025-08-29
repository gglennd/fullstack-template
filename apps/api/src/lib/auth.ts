/* eslint-disable node/prefer-global/process */
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { jwt, openAPI } from "better-auth/plugins";

import db from "~/lib/db";
import * as schema from "~/schema";

const auth = betterAuth({
  baseURL: process.env.BETTER_AUTH_URL,
  secret: process.env.BETTER_AUTH_SECRET,
  plugins: [
    jwt(),
    openAPI({ disableDefaultReference: process.env.NODE_ENV === "production" }),
  ],
  database: drizzleAdapter(db, {
    provider: "pg",
    schema,
  }),
  emailAndPassword: {
    enabled: true,
  },
  telemetry: {
    enabled: false,
  },
});

export default auth;
