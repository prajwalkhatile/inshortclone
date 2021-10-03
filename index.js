// package import
import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

// component import

import Connection from "./connection/database.js";
import Defaultdata from "./default.js";

import route from "./routes/route.js";

// body of server
dotenv.config({ path: "./config.env" });

const app = express();
app.use(cors({ credentials: true }));
app.use(cookieParser());
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));

app.use("/", route);

const PORT = process.env.PORT || 8000;

if (process.env.NODE_ENV == "production") {
  app.use(express.static("client/build"));
}

app.listen(PORT, () => {
  console.log(`server is running at Port number ${PORT}`);
});
Connection();

Defaultdata();
