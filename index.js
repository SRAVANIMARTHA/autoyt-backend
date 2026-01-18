import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import automationRoutes from "./routes/automations.js";

dotenv.config();

const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json());

app.use("/api/automations", automationRoutes);

app.get("/", (req, res) => {
  res.send("AutoYT backend is running");
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
