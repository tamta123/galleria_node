import express from "express";
import pool from "../config/database.js";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors"; //
import bodyParser from "body-parser";

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use("/images", express.static("public/images"));

app.get("/", async (_, res) => {
  try {
    console.log("Tamta");
    const result = await pool.query("SELECT * FROM galleria");
    console.log("tamta");
    return res.status(200).json(result.rows);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
});

app.listen(process.env.PORT || 3000);
