const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());

app.get("/api/recipes", async (req, res) => {
    try {
      const response = await axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata"); // Replace with actual API
      res.json(response.data);
    } catch (error) {
      console.error("Error fetching recipes:");
      console.error("Status Code:", error.response?.status || "Unknown");
      console.error("Response Data:", error.response?.data || "No response data");
      console.error("Message:", error.message);
      
      res.status(500).json({ 
        error: "Failed to fetch recipes", 
        status: error.response?.status || "Unknown",
        details: error.response?.data || error.message,
      });
    }
  });
  
  
app.listen(5000, () => console.log("Server running on port 5000"));