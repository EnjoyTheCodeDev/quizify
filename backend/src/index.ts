import express from "express";
import cors from "cors";
import router from "@/routes/quiz.js";

const app = express();

const port = process.env.PORT ?? "9001";

app.use(express.json());

app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:3000",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  }),
);

app.use(router);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
