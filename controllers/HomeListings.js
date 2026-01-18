const HomeListing = require("../models/HomeListings");

// INDEX – show all home listings
module.exports.index = async (req, res) => {
  const allListings = await HomeListing.find({});
  res.render("listings/index", { allListings });
};

// SHOW CREATE  Home FORM
module.exports.renderNewForm = (req, res) => {
  res.render("listings/new.ejs");
};

// SHOW ONE HOME LISTING
module.exports.Showlistings = async (req, res) => {
  const { id } = req.params;

  const listing = await HomeListing.findById(id)
    .populate("owner")
    .populate("reviews");

  if (!listing) {
    req.flash("error", "Listing does not exist!");
    return res.redirect("/listings");
  }

  res.render("listings/show", { listing });
};

// CREATE HOME LISTING
module.exports.CreatePost = async (req, res) => {
  const { path: url, filename } = req.file;

  const newListing = new HomeListing(req.body.listing);
  newListing.owner = req.user._id;
  newListing.image = { url, filename };

  await newListing.save();
  req.flash("success", "New Listing Created!");
  res.redirect("/listings");
};

// SHOW EDIT FORM
module.exports.EditPost = async (req, res) => {
  const { id } = req.params;

  const listing = await HomeListing.findById(id);
  if (!listing) {
    req.flash("error", "Listing not found!");
    return res.redirect("/listings");
  }

  res.render("listings/edit.ejs", { listing });
};

// UPDATE HOME LISTING
module.exports.UpdatePost = async (req, res) => {
  const { id } = req.params;

  let listing = await HomeListing.findByIdAndUpdate(
    id,
    { ...req.body.listing },
    { new: true }
  );

  if (req.file) {
    const { path: url, filename } = req.file;
    listing.image = { url, filename };
    await listing.save();
  }

  req.flash("success", "Listing Updated Successfully!");
  res.redirect(`/listings/${listing._id}`);
};

// DELETE HOME LISTING
module.exports.DeletePost = async (req, res) => {
  const { id } = req.params;

  await HomeListing.findByIdAndDelete(id);
  req.flash("success", "Listing Deleted!");
  res.redirect("/listings");
};
