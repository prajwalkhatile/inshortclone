import { data } from "./constants/data.js";
import News from "./models/news.js";

const Defaultdata = async () => {
  try {
    await News.deleteMany({});
    await News.insertMany(data);

    console.log("Data imported successfully");
  } catch (error) {
    console.log(`Error in Defaultdata function ${error.message}`);
  }
};

export default Defaultdata;
