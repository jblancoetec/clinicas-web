import mongoose from "mongoose";

const urlMongoDB: string = process.env.URI_MONGO || "";

const conectarDB = async () => {
  try {
    const opcionesMongo: mongoose.ConnectOptions = {
      bufferCommands: false,
    };
    await mongoose.connect(urlMongoDB, opcionesMongo);
    console.log("mongodb conectado");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default conectarDB;
