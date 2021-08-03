import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";

// Components
import Connection from "./database/db.js";
import DefaultData from "./default.js";
import Routes from "./routes/routes.js";

dotenv.config();

const app = express();

// Middleware
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Routes
app.use("/", Routes);

// Port
const PORT = 8000;

// Connecting to Database
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
Connection(username, password);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

// Default Data to Database
DefaultData();
