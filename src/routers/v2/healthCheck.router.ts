import express from "express";
import {healthcheckHandler} from "../../controllers/healthCheck.controller.js";

export const healthcheckRouter = express.Router();
healthcheckRouter.get('/',healthcheckHandler)
