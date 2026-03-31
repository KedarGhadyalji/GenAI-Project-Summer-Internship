import mongoose from "mongoose";

async function connectToDB() {
  try {
    mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to Database successfully!");
  } catch (error) {
    console.log(error);
  }
}

export default connectToDB;
