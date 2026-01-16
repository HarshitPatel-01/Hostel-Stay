const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const User = require("../models/user");
const { userSchema } = require("../schema");
const ExpressError = require("../utils/ExpressError");
const UserController = require("../controllers/user.js")

// Middleware
const validateUser = (req, res, next) => {
  const { error } = userSchema.validate(req.body);
  if (error) {
    const msg = error.details.map(el => el.message).join(",");
    throw new ExpressError(400, msg);
  }
  next();
};

// SIGNUP FORM
router.get("/signup",UserController.RenderSignup);


// HANDLE SIGNUP
router.post("/signup", validateUser, wrapAsync(UserController.SignupForm));

// LOGIN FORM
router.get("/login",UserController.RenderLogin);

// HANDLE LOGIN
router.post(
  "/login",
  passport.authenticate("local", { failureRedirect: "/login", failureFlash: true }),
  UserController.Login
);

// LOGOUT
router.post("/logout",UserController.Logout);

module.exports = router;
