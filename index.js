const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

// Test de connexion
app.get("/ping", (req, res) => {
  res.send("OK");
});

// Réception d’une liste
app.post("/endpoint", (req, res) => {
  console.log("📩 Liste reçue :", req.body);
  res.send("Liste reçue !");
});

app.listen(PORT, () => {
  console.log("Serveur lancé sur le port", PORT);
});
