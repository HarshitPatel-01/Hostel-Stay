const Listing = require("../models/listings");

// Show all boats
module.exports.index = async (req, res) => {
  const boats = await Listing.find({ category: "boat" });
  res.render("boats/index", { boats });
};

// Show one boat
module.exports.show = async (req, res) => {
  const { id } = req.params;

  const boat = await Listing.findOne({
    _id: id,
    category: "boat",
  }).populate("owner");

  if (!boat) {
    req.flash("error", "Boat not found!");
    return res.redirect("/boats");
  }

  res.render("boats/show", { boat });
};

// (Optional later)
// Create boat
module.exports.create = async (req, res) => {
  const { path: url, filename } = req.file;

  const boat = new Listing(req.body.listing);
  boat.owner = req.user._id;
  boat.image = { url, filename };
  boat.category = "boat";

  await boat.save();
  req.flash("success", "Boat created!");
  res.redirect("/boats");
};
