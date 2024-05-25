import express from "express";
import dotenv from "dotenv";
import multer from "multer";
// import bodyParser from "body-parser";
import cors from cors ; 

import morgan from "morgan"; // morgan show's api request in console
import connectDB from "./config/db.js";
import authRoute from "./routes/authRoute.js"; //route of register
import categoryRoute from "./routes/categoryRoute.js"; //route of category
import productRoute from "./routes/productRoute.js"; //route of products
import blogRoute from "./routes/blogRoute.js"; //route of blogs
import sliderRoute from "./routes/sliderRoute.js";
import contactRoute from "./routes/contactRoute.js";
// import reportRoute from "./routes/reportRouter.js";

// configure env
dotenv.config();
// dotenv.config({path: ''}) (if .env file is in another folder)

//config database
connectDB();

// rest object
const app = express();

// 
app.use(cors({ credentials: true }))
// app.use(cors()) 

// body Parser
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
//setting static folder
app.use("/uploads", express.static("uploads"));

//middelwares
app.use(express.json());
app.use(morgan("dev"));

// routes from routers
// ('/api/version/nameByYourChoice', Router file)
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/category", categoryRoute);
app.use("/api/v1/product", productRoute);
app.use("/api/v1/blog", blogRoute);
app.use("/api/v1/contactMessage", contactRoute);
app.use("/api/v1/slider", sliderRoute);
// app.use("/api/v1/report", reportRoute);

//rest api
app.get("/", (req, res) => {
  res.send(
    "<h1>welcome to the ecommerce application</h1> <h2>Hello Client and User</h2>"
  );
});

// port
const port = process.env.PORT || 8080;

// run listen
app.listen(port, () => {
  console.log(`Server Running on ${process.env.DEV_MODE} mode on port ${port}`);
});
