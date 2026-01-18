const express = require("express");
const router = express.Router();
const { listingSchema } = require("../schema.js");
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const homeListingController = require("../controllers/HomeListings.js");
const multer = require("multer");
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });

// Auth Middleware
const { isLoggedIn, isOwner } = require("../middleware/middleware.js");

// Validate Listing Form
const validateListing = (req, res, next) => {
  let { error } = listingSchema.validate(req.body);
  if (error) {
    let errMsg = error.details.map(el => el.message).join(",");
    throw new ExpressError(400, errMsg);
  }
  next();
};

// INDEX + CREATE
router.route("/")
  .get(wrapAsync(homeListingController.index))
  .post(
    isLoggedIn,
    upload.single("listing[image]"),
    validateListing,
    wrapAsync(homeListingController.CreatePost)
  );

// NEW FORM
router.get(
  "/new",
  isLoggedIn,
  homeListingController.renderNewForm
);

// SHOW + UPDATE + DELETE
router.route("/:id")
  .get(wrapAsync(homeListingController.Showlistings))
  .put(
    isLoggedIn,
    isOwner,
    upload.single("listing[image]"),
    validateListing,
    wrapAsync(homeListingController.UpdatePost)
  )
  .delete(
    isLoggedIn,
    isOwner,
    wrapAsync(homeListingController.DeletePost)
  );

// EDIT FORM
router.get(
  "/:id/edit",
  isLoggedIn,
  isOwner,
  wrapAsync(homeListingController.EditPost)
);

module.exports = router;
