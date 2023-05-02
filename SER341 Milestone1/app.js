var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const bodyParser = require("body-parser");
var PORT = 3002;
var userRouter = require("./routes/userRouter");
var app = express();
var cors = require("cors");

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());
var mongoose = require("mongoose");


// 1- create an instance of config file, require passport and passport-local
var config = require("./config");
var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;

var Student = require("./models/student"); //we will create this model to support users
app.use(passport.initialize());
passport.use(new LocalStrategy(Student.authenticate())); //user.authenticated will be exported by  user model it will use passport-user-mongoose
passport.serializeUser(Student.serializeUser());
passport.deserializeUser(Student.deserializeUser());
app.use(express.static(path.join(__dirname, "public")));

var url =
  "mongodb+srv://eebalboni:j3Am4vgTXuRUufCf@cluster0.shlik9e.mongodb.net/autoGrader?retryWrites=true&w=majority";
console.log(url);

//connecting using mongoose
mongoose
  .connect(url, { useNewUrlParse: true })
  .then(() => {
    console.log("succesfully connected to db");
  })
  .catch((err) => {
    console.error("error connecting to db");
  });

app.use("/", userRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

app.listen(PORT, () => {
  console.log(`Server Listening on port: ${PORT}`);
});
