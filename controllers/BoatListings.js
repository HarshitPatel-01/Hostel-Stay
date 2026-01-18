const BoatListing = require("../models/BoatListings");

// INDEX – show all boat listings
module.exports.index = async (req, res) => {
  const allListings = await BoatListing.find({});
  res.render("boats/index", { allListings });
};

// SHOW CREATE Boat Form
module.exports.renderNewForm = (req, res) => {
  res.render("boats/new.ejs");
};

// SHOW ONE HOME LISTING
module.exports.Showlistings = async (req, res) => {
  const { id } = req.params;

  const listing = await BoatListing.findById(id)
    .populate("owner")
    .populate("reviews");

  if (!listing) {
    req.flash("error", "Listing does not exist!");
    return res.redirect("/boats");
  }

  res.render("boats/show", { listing });
};

// CREATE Boat LISTING
module.exports.CreatePost = async (req, res) => {
  const { path: url, filename } = req.file;

  const newListing = new BoatListing(req.body.listing);
  newListing.owner = req.user._id;
  newListing.image = { url, filename };

  await newListing.save();
  req.flash("success", "New Listing Created!");
  res.redirect("/boats");
};

// SHOW EDIT Boat FORM
module.exports.EditPost = async (req, res) => {
  const { id } = req.params;

  const listing = await BoatListing.findById(id);
  if (!listing) {
    req.flash("error", "Listing not found!");
    return res.redirect("/boats");
  }

  res.render("boats/edit.ejs", { listing });
};

// UPDATE Boat LISTING
module.exports.UpdatePost = async (req, res) => {
  const { id } = req.params;

  let listing = await BoatListing.findByIdAndUpdate(
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
  res.redirect(`/boats/${listing._id}`);
};

// DELETE Boat LISTING
module.exports.DeletePost = async (req, res) => {
  const { id } = req.params;

  await BoatListing.findByIdAndDelete(id);
  req.flash("success", "Listing Deleted!");
  res.redirect("/boats");
};
