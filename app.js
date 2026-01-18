if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError.js");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user");

// Home Routes
const homelistingRouter = require("./routes/HomeListings");
const reviewRouter = require("./routes/review");
const userRouter = require("./routes/user");

// Boat Routes
const boatlistingRouter = require("./routes/BoatListings");


// MongoDB Connection
const dbUrl = process.env.ATLASDB_URL;

// const dbUrl = "mongodb://127.0.0.1:27017/Home-Stay";

mongoose
  .connect(dbUrl)
  .then(() => console.log("Connected to Home-Stay DB"))
  .catch((err) => console.error(" Mongo connection error:", err));

// View Engine

app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


// Middleware

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));


// Session Store

const store = MongoStore.create({
  mongoUrl: dbUrl,
  crypto: {
    secret: process.env.SECRET,
  },
  touchAfter: 24 * 3600,
});

store.on("error", (err) => {
  console.log("ERROR in Mongo Session Store:", err);
});

const sessionOptions = {
  store,
  name: "session",
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
    maxAge: 7 * 24 * 60 * 60 * 1000,
  },
};

app.use(session(sessionOptions));
app.use(flash());


// Passport Config

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Locals Middleware

app.use((req, res, next) => {
  res.locals.currentUser = req.user;
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  next();
});

// Home Routes

app.use("/listings", homelistingRouter);
app.use("/listings/:id/reviews", reviewRouter);
app.use("/", userRouter);

app.get("/", (req, res) => {
  res.redirect("/listings");
});


//Boat Routes

app.use("/boats",boatlistingRouter);

// 404 Handler

app.all(/^\/api/, (req, res, next) => {
  next(new ExpressError(404, "Page Not Found"));
});


// Global Error Handler

app.use((err, req, res, next) => {
  const { statusCode = 500, message = "Something went wrong!" } = err;
  res.status(statusCode).render("listings/error", { message });
});


// Server (Render Safe)

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
