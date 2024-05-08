import { Routes } from "./src/http/routes.js";

Routes.listen({
  host: '0.0.0.0',
  port: process.env.PORT ?? 3333,
})