import express, { Express } from 'express';
import {config} from "./config/index.js";
import {pingHandler} from "./controllers/ping.controller.js";
const app: Express = express();
import pingRouter from "./routers/ping.router.js";

// app.get('/ping', pingHandler)/
// /This line is working like a router
app.use(pingRouter);
// you are registering all the routes with the router
app.listen(config.PORT, () => {
  console.log(`Server is running on port ${config.PORT}`);
});



