import http from "http";
import express from "express";
import { applyMiddleware, applyRoutes } from "./utils";
import middleware from "./middleware";
import routes from "./services";

const router = express();
const { PORT = 3000 } = process.env;
const server = http.createServer(router);

applyMiddleware(middleware, router);
applyRoutes(routes, router);

server.listen(PORT, () =>
  console.log(`Server is running http://localhost:${PORT}...`)
);
