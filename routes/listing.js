const express = require("express");
const router = express.Router();
const { listingSchema } = require("../schema.js");
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const listingController = require("../controllers/listings.js")
const multer  = require('multer')
const {storage} = require("../cloudConfig.js")
const upload = multer({storage })

// Models
const Listing = require("../models/listing");

// Auth Middleware
const { isLoggedIn, isOwner } = require("../middleware/middleware.js");

// Validate Listing Form
const validateListing = (req, res, next) => {
  let { error } = listingSchema.validate(req.body);
  if (error) {
    let errMsg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, errMsg);
  }
  next();
};

router.route("/")
  .get(wrapAsync(listingController.index))
  .post(isLoggedIn, upload.single('listing[image]'), validateListing, wrapAsync(listingController.CreatePost));

// NEW FORM (must be logged in)
router.get("/new", isLoggedIn,listingController.renderNewForm);

router.route("/:id")
  .get(wrapAsync(listingController.Showlistings))
  .put(isLoggedIn, isOwner, upload.single('listing[image]'), validateListing, wrapAsync(listingController.UpdatePost))
  .delete(isLoggedIn,isOwner,wrapAsync(listingController.DeletePost));

// EDIT FORM (must be logged in + must be owner)
router.get("/:id/edit",isLoggedIn,isOwner, wrapAsync(listingController.EditPost));

module.exports = router;
