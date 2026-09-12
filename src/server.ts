import express, { Express } from 'express';
import {config} from "./config/index.js";
import {pingHandler} from "./controllers/ping.controller.js";
const app: Express = express();
import {v1Router} from "./routers/v1/index.routes.js";
import {v2Router} from "./routers/v2/index.routes.js";

// app.get('/ping', pingHandler)/
// /This line is working like a router
app.use('/api/v1',v1Router);
app.use('/api/v2',v2Router);
// you are registering all the routes with the router
app.listen(config.PORT, () => {
  console.log(`Server is running on port ${config.PORT}`);
});



