import express, { Request, Response } from "express";

const app = express();
const PORT = Number(process.env.PORT) || 4000;

app.use(express.json());

app.get("/health", (_req: Request, res: Response) => {
  res.json({ status: "ok" });
});

app.post("/echo", (req: Request, res: Response) => {
  res.json({ received: req.body });
});

app.listen(PORT, () => {
  console.log(`API running on http://localhost:${PORT}`);
});
