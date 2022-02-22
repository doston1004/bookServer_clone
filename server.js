const dotenv = require(`dotenv`);
dotenv.config();

const express = require(`express`);
const mongoose = require(`mongoose`);

const routes = require(`./routes`);

const app = express();

//Middlwares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
app.use(`/api`, routes);

// Database connection
const db = async () => {
  try {
    await mongoose.connect(`mongodb://localhost/libraryClone`);
    console.log(`MongoDB connected`);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

db();

//Server listening
const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`Server started listening on the port ${PORT}...`)
);
