import express, { Express } from 'express';
import {config} from "./config/index.js";
const app: Express = express();

app.get('/ping', (req: any, res: any) => {
    res.send('pong')
})

app.listen(config.PORT, () => {
  console.log(`Server is running on port ${config.PORT}`);
});



