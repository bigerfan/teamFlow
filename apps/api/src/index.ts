import express, { Request, Response } from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth-routes";
import { errorHandler } from "./middleware/errorHandler";

dotenv.config();

const app = express();
const PORT = Number(process.env.PORT) || 4000;

app.use(express.json());

app.use(authRoutes);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`API running on http://localhost:${PORT}`);
});
