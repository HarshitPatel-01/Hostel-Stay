const Listing = require("../models/HomeListings");

// Must be logged in
module.exports.isLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    req.flash("error", "You must be logged in first!");
    return res.redirect("/login");
  }
  next();
};

// Must be owner of listing
module.exports.isOwner = async (req, res, next) => {
  const { id } = req.params;
  const listing = await Listing.findById(id);

  // Listing not found
  if (!listing) {
    req.flash("error", "Listing not found!");
    return res.redirect("/listings");
  }

  // Owner missing (old data) OR not equal
  if (!listing.owner || !listing.owner.equals(req.user._id)) {
    console.log("Listing owner:", listing.owner);
    console.log("Current user:", req.user._id);
    console.log("Equal? ->", listing.owner.equals(req.user._id));
    req.flash("error", "You are not owner!");
    return res.redirect(`/listings/${id}`);
  }

  next();
};


// TEMPORARY basic user validation (optional)
module.exports.validateUser = (req, res, next) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    req.flash("error", "All fields are required");
    return res.redirect("back");
  }
  next();
};
