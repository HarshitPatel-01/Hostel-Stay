const Review = require("../models/review.js");
const Listing = require("../models/listing.js");

module.exports.CreateReview = async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id);
    console.log(listing);
    const { rating, comment } = req.body.review;
    const newReview = new Review({ rating, comment });

    listing.reviews.push(newReview);

    await newReview.save();
    await listing.save();
    req.flash("success","New Review Created!");
    res.redirect(`/listings/${listing._id}`);
}

module.exports.DeleteReview = async(req,res)=>{
    let {id,reviewId} = req.params;  
    await Listing.findByIdAndUpdate(id,{$pull: {reviews: reviewId}});
    await Review.findByIdAndDelete(reviewId);
    req.flash("success","Review was Deleted!");
    res.redirect(`/listings/${id}`);
}
