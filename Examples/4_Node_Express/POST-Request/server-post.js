const express = require("express");
const app = express();

app.use(express.json());

// POST Route
app.post("/api/event", (req, res) => {
  const event = req.body;

  if (!event.name) {
    return res.status(400).json({ error: "Eventname fehlt" });
  }

  res.status(201).json({
    message: "Event erfolgreich gespeichert",
    event: event
  });
});

app.listen(3000, () => {
  console.log("Server läuft auf Port 3000");
});