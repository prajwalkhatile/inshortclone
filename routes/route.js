import express from "express";
import { userData, userLogin } from "../controller/authentecation.js";

import { getNews } from "../controller/news_controller.js";
import authenticate from "../middleware/verify.js";

const route = express.Router();

route.get("/news", authenticate, getNews);

route.post("/register", userData);

route.post("/login", userLogin);

route.get("/logout", (req, res) => {
  res.clearCookie("jtoken", { path: "/" });
  res.status(200).send("Logout successfully");
});
export default route;
