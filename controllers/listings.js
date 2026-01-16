const Listing = require("../models/listing");

// Index Page - Show all listings
module.exports.index = async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index", { allListings });
};

// Show Create Form
module.exports.renderNewForm = (req, res) => {
    res.render("listings/new.ejs");
};

// Show One Listing
module.exports.Showlistings = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id)
        .populate("owner")
        .populate("reviews");

    if (!listing) {
        req.flash("error", "Listing does not exist!");
        return res.redirect("/listings");
    }
    res.render("listings/show", { listing });
};

// Create New Listing
module.exports.CreatePost = async (req, res) => {
    const { path: url, filename } = req.file;

    const newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;
    newListing.image = { url, filename };

    await newListing.save();
    req.flash("success", "New Listing Created!");
    res.redirect("/listings");
};

// Render Edit Form
module.exports.EditPost = async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id);

    if (!listing) {
        req.flash("error", "Listing not found!");
        return res.redirect("/listings");
    }

    res.render("listings/edit.ejs", { listing });
};

// Update Listing (Text + Image)
module.exports.UpdatePost = async (req, res) => {
    const { id } = req.params;

    // Update basic fields
    let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing }, { new: true });

    // If new image uploaded, replace old one
    if (req.file) {
        const { path: url, filename } = req.file;
        listing.image = { url, filename };
        await listing.save();
    }

    req.flash("success", "Listing Updated Successfully!");
    res.redirect(`/listings/${listing._id}`);
};

// Delete Listing
module.exports.DeletePost = async (req, res) => {
    const { id } = req.params;
    await Listing.findByIdAndDelete(id);

    req.flash("success", "Listing Deleted!");
    res.redirect("/listings");
};
