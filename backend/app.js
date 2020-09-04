const express = require("express");
const bodyParser = require("body-parser");
const HttpError = require("./models/http-error");

const placesRoutes = require("./routes/places-routes");
const usersRoutes = require('./routes/users-routes')
const app = express();
//Body parser middleware
app.use(bodyParser.json());

//Place routes middleware
app.use("/api/places", placesRoutes);
//User routes middleware
app.use('/api/users', usersRoutes)

app.use((req, res, nex) => {
  const error = new HttpError("Couldn't find this route.", 404);
  throw error;
});

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res
    .status(error.code || 500)
    .json({ message: error.message || "An unknown error occurred." });
});

app.listen(5000, () => console.log("Server started on port 5000"));
