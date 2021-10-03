import mongoose from "mongoose";

const Connection = async () => {
  const URL = process.env.CONNECTION;

  try {
    await mongoose.connect(URL, {
      useNewUrlParser: true,
    });
    console.log("Connection to MonogDB is successful......");
  } catch (error) {
    console.log(`Error while connecting to Atlas ${error}`);
  }
};
export default Connection;
