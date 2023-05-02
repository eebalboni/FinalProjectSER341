var express = require("express");
var router = express.Router();
var passport = require("passport");
var Student = require("../models/student"); // user model added
var Verify = require("./verify"); // verfication
const bcrypt = require("bcrypt");
/* GET users listing. */
// verification is added to all get requests
router.get(
  "/",
  Verify.verifyOrdinaryUser,
  function (req, res, next) {
    Student.find({}, function (err, students) {
      if (err) {
        throw err;
      }
      res.json(students);
    });
  }
);

// 3- register a new user on end poitn register, info is sent as a json object
router.post("/register", async function (req, res) {
  Student.register(
    new Student({ username: req.body.username }),
    req.body.password,
    function (err, student) {
      if (err) return res.status(500).json({ err: err });
      if (req.body.firstname) {
        student.firstname = req.body.firstname;
      }
      if (req.body.lastname) {
        student.lastname = req.body.lastname;
      }
      passport.authenticate("local")(req, res, function () {
        var token = Verify.getToken(student);

        return res
          .status(200)
          .header("x-access-token", token)
          .header("access-control-expose-headers", "x-access-token")
          .json({ status: "Registration Successful !" });
      });
    }
  );
});
// 4- user login
router.post("/login", (req, res, next) => {
  //req.body will have username and password

  passport.authenticate("local", function (err, student, info) {
    if (err) {
      console.log(err);
      return next(err);
    }
    if (!student) {
      console.log("no user");
      return res.status(401).json({ err: info });
    }
    req.logIn(student, function (err) {
      if (err) return res.status(500).json({ err: "Could not log in user" });

      console.log("User in users: ", student);
      Student.findOne({ username: student.username }, function (err, dbUser) {
        if (err) {
          return done(err);
        }
        if (!student) {
          return done(null, false);
        }
        console.log("DB user:", dbUser);
        var token = Verify.getToken(dbUser);
        res.status(200);
        res.send(token);
        //res.header("Auth", token);
      });
    });
  })(req, res, next);
});

// 5- implementing logout
router.get("/logout", function (req, res) {
  req.logout();
  res.status(200).json({
    status: "Bye!",
  });
});

module.exports = router;
