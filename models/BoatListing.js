const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const boatListingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  image: {
    url: String,
    filename: String,
  },
  price: Number,
  location: String,
  country: String,

  capacity: Number,
  boatType: String,
  length: Number,

  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
}, { timestamps: true });

module.exports = mongoose.model("BoatListing", boatListingSchema);
