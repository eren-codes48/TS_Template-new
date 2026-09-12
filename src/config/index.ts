//This file is going to have all the configuration logic for the server
import dotenv from 'dotenv';
type ServerConfig={
    PORT:number;
}
function loadEnv(){
    dotenv.config();
}
loadEnv();

export const config:ServerConfig={
    PORT:Number(process.env.PORT) || 3001
}