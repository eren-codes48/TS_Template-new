import express from "express";
import {healthcheckRouter} from "./healthCheck.router.js";

export const v2Router=express.Router()
v2Router.use('/health',healthcheckRouter)