import express from "express";
import pingRouter from "./ping.router.js";

export const v1Router=express.Router()
v1Router.use('/ping',pingRouter)