import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const userSechma = mongoose.Schema({
  name: {
    type: "String",
    required: true,
  },
  phone: {
    type: "String",
    required: true,
  },
  email: {
    type: "String",
    required: true,
  },
  password: {
    type: "String",
    required: true,
  },
  cpassword: {
    type: "String",
    required: true,
  },
  tokens: [
    {
      token: {
        type: "string",
        required: true,
      },
    },
  ],
});

// At this stage we are hashing the password
userSechma.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
    this.cpassword = await bcrypt.hash(this.cpassword, 12);
  }
  next();
});

// this is the method to generate authentication token
userSechma.methods.generateAuthToken = async function () {
  try {
    let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
    this.tokens = this.tokens.concat({ token: token });
    await this.save();
    return token;
  } catch (error) {
    console.log(error);
  }
};

const Register = mongoose.model("REGISTER", userSechma);

export default Register;
