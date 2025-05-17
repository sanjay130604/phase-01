// import cliChart from "cli-chart";
// import { Weather } from "../models/weatherModel.js";

// export const showTemperatureTrends = async (city, startDate, endDate) => {
//   try {
//     const data = await Weather.find({
//       location: city,
//       timestamp: { $gte: new Date(startDate), $lte: new Date(endDate) },
//     }).sort("timestamp");

//     if (data.length === 0) {
//       console.log("ℹ️  No temperature data available for the given period.");
//       return;
//     }

//     const chart = new cliChart({ width: 50, height: 10, horizontal: true });
//     data.forEach((entry) => chart.addBar(entry.temperature, "blue"));

//     console.log(
//       `\n📊 Temperature trend for ${city} from ${startDate} to ${endDate}:`
//     );
//     chart.draw();
//   } catch (error) {
//     console.error("❌ Error displaying temperature trends:", error);
//   }
// };


import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import { Weather } from "./models/weatherModel.js";

dotenv.config();
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;

connectDB();

// Routes
app.get("/weather", async (req, res) => {
  try {
    const data = await Weather.find();
    res.json(data);
  } catch {
    res.status(500).json({ error: "Server error" });
  }
});

app.post("/weather", async (req, res) => {
  try {
    const weather = new Weather(req.body);
    await weather.save();
    res.status(201).json({ message: "Weather data saved", data: weather });
  } catch {
    res.status(500).json({ error: "Failed to save data" });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
