const express = require("express");
const app = express();

// Middleware
app.use(express.json());

// Route: Startseite
app.get("/", (req, res) => {
  res.send("Server läuft!");
});

// Route: Beispiel-API
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hallo von der API" });
});

// Server starten
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server läuft auf http://localhost:${PORT}`);
});