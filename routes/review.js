const express = require("express");
const router = express.Router({mergeParams: true});
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const { reviewSchema} = require("../schema.js");
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");

const validateReview = (req,res,next)=>{
    let {error} = reviewSchema.validate(req.body);
 
    if(error){
        let errMsg = error.details.map((el) =>el.message).join(",");
        throw new ExpressError(400,error);
    } else{
        next();
    }
};

const ReviewController = require("../controllers/review.js")

// Post Reviews Route
router.post(
  "/",
  validateReview,
  wrapAsync(ReviewController.CreateReview)
);

//Delete Review Route
router.delete("/:reviewId",wrapAsync(ReviewController.DeleteReview)
)


module.exports = router;
