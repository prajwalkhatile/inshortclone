import Register from "../models/userschema.js";
import bcrypt from "bcryptjs";

export const userData = async (req, res) => {
  try {
    const { name, phone, email, password, cpassword } = req.body;

    const Password = password;
    const Confirm_password = cpassword;
    const userExist = await Register.findOne({ email: email });

    if (!name || !phone || !email || !password || !cpassword) {
      res.status(422).json("Please fill the all inputs feild");
    } else if (userExist) {
      res.status(422).json("User already exist ");
    } else if (Password !== Confirm_password) {
      res.status(422).json("please enter same password");
    } else {
      const data = await new Register(req.body);
      data.save();
      console.log(data);
      res.status(200).json("Registeration Successfully");
    }
  } catch (error) {
    console.log(`Error in the server at userData Api ${error}`);
  }
};

export const userLogin = async (req, res) => {
  try {
    let token;
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(422).json("Fill the input feild");
    }
    const userEmail = await Register.findOne({ email: email });
    // const userPassword = await Register.findOne({ password: password });

    if (userEmail) {
      const isMatch = await bcrypt.compare(password, userEmail.password);

      token = await userEmail.generateAuthToken();
      console.log(token);

      res.status(202).cookie("jtoken", token, {
        expires: new Date(Date.now() + 900000),
        sameSite: "None",
        secure: true,
        httpOnly: true,
      });

      if (!isMatch) {
        res.status(422).json("Invalid login Credentials ");
      } else {
        res.status(200).json(" Login successfull");
      }
    } else {
      res.status(400).json("Invalid login Credentials ");
    }
  } catch (error) {
    console.log(`Error while calling userLogin api at server ${error}`);
  }
};
