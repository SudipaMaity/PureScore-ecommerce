import express from "express";
import dotenv from "dotenv";
import multer from "multer";
// import bodyParser from "body-parser";
import morgan from "morgan"; // morgan show's api request in console

import connectDB from "./config/db.js";
import authRoute from "./routes/authRoute.js";
import categoryRoute from "./routes/categoryRoute.js";
import productRoute from "./routes/productRoute.js";
import blogRoute from "./routes/blogRoute.js";
import sliderRoute from "./routes/sliderRoute.js";
import contactRoute from "./routes/contactRoute.js";
// import reportRoute from "./routes/reportRouter.js";
import cors from "cors";
// import path from "path";

// compile with ES model
// import { fileURLToPath } from 'url';
// import { dirname } from 'path';

// const __filename = fileURLToPath(import.meta.url);

// Get the directory name
// const __dirname = dirname(__filename);

// configure env
dotenv.config();
// dotenv.config({path: ''}) (if .env file is in another folder)

//config database
connectDB();

// rest object
const app = express();

// app.use(cors({ credentials: true }));

// body Parser
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
//setting static folder
app.use("/uploads", express.static("uploads"));

//middelwares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
// app.use(express.static(path.join(__dirname, './client/dist')))

// routes from routers
// ('/api/version/nameByYourChoice', Router file)
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/category", categoryRoute);
app.use("/api/v1/product", productRoute);
app.use("/api/v1/blog", blogRoute);
app.use("/api/v1/contactMessage", contactRoute);
app.use("/api/v1/slider", sliderRoute);
// app.use("/api/v1/report", reportRoute);

// rest api
// app.use('*', function (req, res){
//   res.sendFile(path.json(__dirname, './client/dist/index.html'))
// })

// port
const port = process.env.PORT || 8080;

// run listen
app.listen(port, () => {
  // console.log(`Server Running on ${process.env.DEV_MODE} mode on port ${port}`);
});
