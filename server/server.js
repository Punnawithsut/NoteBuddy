import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import { connectDB } from "./libs/db.js";

const app = express();
const PORT = 5000;

const mongodb_uri = process.env.MONGODB_URI;
const database_name = process.env.MONGODB_NAME;

app.use(cors());

app.listen(PORT, () => {
    console.log(`Currently listen to ${PORT}`);
});

app.get("/api/status", (req, res) => {
    res.json("Server Live Right now!");
})

connectDB(mongodb_uri, database_name);