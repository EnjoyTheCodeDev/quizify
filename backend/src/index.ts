import express from "express";
const app = express();

import router from "@/routes/quiz.js";

const port = process.env.PORT ?? "9001";

app.use(router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
