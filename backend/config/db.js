import mongoose from "mongoose";

const connectDB = async () => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI not defined in .env");
    }
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected successfully");
  } catch (err) {
    console.error("MongoDB Connection Error:", err.message);
    throw err;
  }
};

export default connectDB;
