const express = require("express");
const router = express.Router();
const { listingSchema } = require("../schema.js");
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const BoatListingController = require("../controllers/BoatListings.js");
const multer = require("multer");
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });


// Auth Middleware
const { isLoggedIn, isOwner } = require("../middleware/middleware.js");


// Validate  Boat Listing Form
const validateListing = (req, res, next) => {
  let { error } = listingSchema.validate(req.body);
  if (error) {
    let errMsg = error.details.map(el => el.message).join(",");
    throw new ExpressError(400, errMsg);
  }
  next();
}

// INDEX + CREATE
router.route("/")
  .get(wrapAsync(BoatListingController.index))
  .post(
    isLoggedIn,
    upload.single("listing[image]"),
    validateListing,
    wrapAsync(BoatListingController.CreatePost)
  );

// NEW FORM
router.get(
  "/new",
  isLoggedIn,
  BoatListingController.renderNewForm
);

// SHOW + UPDATE + DELETE
router.route("/:id")
  .get(wrapAsync(BoatListingController.Showlistings))
  .put(
    isLoggedIn,
    isOwner,
    upload.single("listing[image]"),
    validateListing,
    wrapAsync(BoatListingController.UpdatePost)
)
  .delete(
    isLoggedIn,
    isOwner,
    wrapAsync(BoatListingController.DeletePost)
);

// EDIT FORM
router.get(
  "/:id/edit",
  isLoggedIn,
  isOwner,
  wrapAsync(BoatListingController.EditPost)
);

module.exports = router;
