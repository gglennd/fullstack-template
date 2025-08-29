import { Hono } from "hono";
import auth from "~/lib/auth";

const app = new Hono()
  .basePath("/")
  .on(["POST", "GET"], "/api/auth/**", c => auth.handler(c.req.raw))
  .get("/", c => c.json({ health: "Ok" }, 200));

export default app;
