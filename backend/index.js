import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors);
app.use(helmet);
app.use(morgan);

app.listen(port, () => {
  console.log(`server running on port: ${port}`);
});
