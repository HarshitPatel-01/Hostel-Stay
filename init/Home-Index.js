require("dotenv").config({ path: "../.env" });
const mongoose = require("mongoose");
const initData = require("./Home-Stay-data.js");
const Listing = require("../models/HomeListings.js");

const MONGO_URL = process.env.ATLASDB_URL;

const ownerId = new mongoose.Types.ObjectId("69663a3cd68e40db1333dc4a");

async function seedDB() {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("Connected to MongoDB Atlas");

    // Clear old data
    await Listing.deleteMany({});

    // Home-Stay listings
    const homeListingsWithOwner = initData.data.map(listing => ({
      ...listing,
      owner: ownerId,
      reviews: [],
      category: "stay"
    }));

    await Listing.insertMany(homeListingsWithOwner);

    console.log("Database seeded successfully Homes");
  } catch (err) {
    console.error("Seeding error:", err);
  } finally {
    await mongoose.connection.close();
  }
}

seedDB();
