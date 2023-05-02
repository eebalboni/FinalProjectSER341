// uses express router
var express = require("express");
var recipeRouter = express.Router(); //create a router object
var bodyParser = require("body-parser");

/** 1- declare mongoose and recipes **/
var mongoose = require("mongoose");
var Courses = require("../models/courses");

// 1.1
var Verify = require("./verify");

var recipeRouter = express.Router();
recipeRouter.use(bodyParser.json());

recipeRouter
  .route("/")
  //1.2 verify middleware will apply before the rest is applied
  .get(Verify.verifyOrdinaryUser, function (req, res, next) {
    //chained into route(), no semi-colon after the all implementation
    // 2- implement get  to return all recipes
    Courses.find({})
      .populate("Courses.postedby") //1.1.6 add code to populate recipe
      .exec(function (err, course) {
        //get the recipes collection as an array,received as the recipe param
        if (err) throw err; //propagate error
        res.json(course); // conert to json and return in res
      });
  });


module.exports = recipeRouter;
