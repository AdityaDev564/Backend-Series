// require("dotenv").config({ path: "./env" });
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
    path: "./.env",
});

connectDB()
    .then(() => {
        app.on("error", (error) => {
            console.log(`Error: ${error}`);
            throw error;
        });
        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        });
    })
    .catch((err) => {
        console.log(`MongoDB connection failed !!! : ${err}`);
    });

/*
Since Node v20.6.0, node is supporting env file without any 3rd party library (dotenv). You have to just add --env-file in your script tag in package.json. So, your script tag will look like:

  "scripts": {
    "start": "node --env-file=.env src/index.js",
    "dev": "nodemon --env-file=.env src/index.js"
  }
*/

/*
import express from "express";

const app = express();

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log(`Error: ${error}`);
      throw error;
    });

    app.listen(process.env.PORT, () => {
      console.log(`App is listening on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.error(`Error: ${error}`);
    throw error;
  }
})();
*/
