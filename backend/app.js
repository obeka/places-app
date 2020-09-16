const fs = require("fs");
const path = require('path')

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const HttpError = require("./models/http-error");

const placesRoutes = require("./routes/places-routes");
const usersRoutes = require("./routes/users-routes");
const app = express();
//Body parser middleware
app.use(bodyParser.json());

//Middleware for static folders like images
app.use('/uploads/images', express.static(path.join('uploads', 'images')))

//CORS middleware
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Allow-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
  next();
});

//Place routes middleware
app.use("/api/places", placesRoutes);
//User routes middleware
app.use("/api/users", usersRoutes);

app.use((req, res, next) => {
  const error = new HttpError("Couldn't find this route.", 404);
  throw error;
});

app.use((error, req, res, next) => {
  if (req.file) {
    fs.unlink(req.file.path, err => { // path relates the image path, unlink remove the image from disc
      console.log(err);
    });
  }

  if (res.headerSent) {
    return next(error);
  }
  res
    .status(error.code || 500)
    .json({ message: error.message || "An unknown error occurred." });
});

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.f6uwe.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
  )
  .then(() =>
    app.listen(5000, () => console.log("Server started on port 5000"))
  )
  .catch();
