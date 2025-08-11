import express from "express";
import { login, signin } from "../controllers/authController.js";

export const authRoute = express.Router();

authRoute.post("/signin", signin);
authRoute.post("/login", login);