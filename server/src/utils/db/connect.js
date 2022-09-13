import mongoose from "mongoose";

const connect = async () => {
  const DB_CONNECT = process.env.DB_CONNECT;
  try {
    await mongoose.connect(DB_CONNECT);
    console.log("DB connection established");
  } catch (error) {
    throw error;
  }
};

export default connect;
