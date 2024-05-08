import { Routes } from "./src/http/routes.js";

Routes.listen({
  port: process.env.PORT ?? 3333,
})