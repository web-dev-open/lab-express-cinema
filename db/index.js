require('dotenv/config');

const mongoose = require("mongoose");

const MONGO_URI = process.env.MONGODB_URI || "mongodb://0.0.0.0/cinema" || "mongodb://localhost/cinema";

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });
