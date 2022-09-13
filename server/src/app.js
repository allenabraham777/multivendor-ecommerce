import express from "express";
import * as dotenv from "dotenv";
import connectDB from "./utils/db/connect.js";
import routes from "./routes/index.js";
dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api", routes);

const initialiseApp = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server listening to port: ${PORT}`);
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

initialiseApp();
