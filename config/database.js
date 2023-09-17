import pkg from "pg";
import dotenv from "dotenv";
// import fs from "fs";
dotenv.config();

const { Pool } = pkg;

// const jsonData = fs.readFileSync("data.json", "utf8");
// const data = JSON.parse(jsonData);

const pool = new Pool({
  host: process.env.PGHOST,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
  database: process.env.PGDATABASE,
});

// const insertRecord = async (record) => {
//   try {
//     const query = `INSERT INTO galleria (name, year, description, source, artist_photo, artist_name, thumbnail, hero_s, hero_l, gallery)
//     VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)`;

//     const values = [
//       record.name,
//       record.year,
//       record.description,
//       record.source,
//       record.artist.photo,
//       record.artist.name,
//       record.images.thumbnail,
//       record.images.hero.small,
//       record.images.hero.large,
//       record.images.gallery,
//     ];
//     await pool.query(query, values);
//     console.log(`Inserted record: ${record.name}`);
//   } catch (error) {
//     console.error(`Error inserting record: ${record.name}`, error);
//   }
// };

// // Loop through the data and insert records
// const insertDataIntoDB = async () => {
//   for (const record of data) {
//     await insertRecord(record);
//   }

//   // Close the database connection when done
//   pool.end();
// };

// // Call the function to start the data insertion process
// insertDataIntoDB();

export default pool;
