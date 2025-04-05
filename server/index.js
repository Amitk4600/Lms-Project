import express from "express";
import dotenv from "dotenv";
import connectDb from "./database/db.js";
import userRoute from "./routes/user.routes.js";
import cookieParser from "cookie-parser";
import cors from "cors";
dotenv.config({});
// call database
connectDb();
const app = express();
const PORT = process.env.PORT || 3000;

// default middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: "http://localhost:5173",
    credentials: true
}))

//apies
app.use("/api/v1/user", userRoute);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));