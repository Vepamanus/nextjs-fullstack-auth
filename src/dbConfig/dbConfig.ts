import mongoose from "mongoose";

export async function connect() {
  try {
    await mongoose.connect(
      "mongodb+srv://vepamanusv:vepamanusv200@cluster0.tf8f9jk.mongodb.net/?retryWrites=true&w=majority"
    );
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("MongoDB connected successfully");
    });

    connection.on("error", (err) => {
      console.log(
        "MongoDB connection error. Please make sure MongoDB is running. " + err
      );
      process.exit(1); // Exit with a failure code
    });
  } catch (error) {
    console.log("Something goes wrong!");
    console.error(error);
    process.exit(1); // Exit with a failure code
  }
}
