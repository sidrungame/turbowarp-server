const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// 🔍 TEST CONNEXION (TurboWarp appelle ça)
app.get("/ping", (req, res) => {
  res.status(200).send("OK");
});

// 📤 RÉCEPTION DE LISTE
app.post("/endpoint", (req, res) => {
  console.log("📩 LISTE REÇUE :", req.body);
  res.status(200).send("OK");
});

app.listen(PORT, () => {
  console.log("✅ Serveur prêt sur le port", PORT);
});
