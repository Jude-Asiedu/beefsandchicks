
// const db = require("../models/db"); // your db connection instance
const { sequelize } = require("../models");

async function healthCheck( req, res){
  try {
    // Run a simple query to test MySQL connection
    // await db.promise().query("SELECT 1");
    await sequelize.authenticate();

    res.status(200).json({
      status: "ok",
      uptime: process.uptime(),
      timestamp: Date.now(),
      database: "connected"
    });
  } catch (err) {
    console.error("Health check failed:", err);
    res.status(500).json({
      status: "error",
      uptime: process.uptime(),
      timestamp: Date.now(),
      database: "not connected",
      error: err.message
    });
  }
}

module.exports = {
  health:healthCheck
}