import { Hono } from "hono";

const app = new Hono()
  .basePath("/")
  .get("/", c => c.json({ health: "Ok" }, 200));

export default app;
