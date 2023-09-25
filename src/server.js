import express from "express";
import pool from "../config/database.js";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use("/images", express.static("public/images"));

app.get("/artist/:artistId", async (req, res) => {
  try {
    const { artistId } = req.params;
    const artistQuery = `SELECT * FROM galleria WHERE id = $1`;
    const result = await pool.query(artistQuery, [artistId]);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Artist not found" });
    }
    return res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

app.get("/", async (_, res) => {
  try {
    const result = await pool.query("SELECT * FROM galleria");
    return res.status(200).json(result.rows);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
});

app.listen(process.env.PORT || 3000);
