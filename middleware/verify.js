import jwt from "jsonwebtoken";
import Register from "../models/userschema.js";

const authenticate = async (req, res, next) => {
  try {
    const token = req.cookies.jtoken;
    console.log(token);

    const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
    console.log(verifyToken);

    const rootUser = await Register.findOne({
      _id: verifyToken._id,
      "tokens.token": token,
    });

    if (!rootUser) {
      throw new Error("User not found");
    }

    req.token = token;
    req.rootUser = rootUser;
    req.userId = rootUser._id;

    next();
  } catch (error) {
    res.status(401).send("Unauthorised user :No token provided");
    console.log(error);
  }
};

export default authenticate;
