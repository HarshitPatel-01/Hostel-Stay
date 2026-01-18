require("dotenv").config({ path: "../.env" });
const mongoose = require("mongoose");
const initData = require("../init/data.js");
const Listing = require("../models/listings");

const MONGO_URL = process.env.ATLASDB_URL;

const ownerId = new mongoose.Types.ObjectId("69663a3cd68e40db1333dc4a");

async function seedDB() {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("Connected to MongoDB Atlas");

    await Listing.deleteMany({});

    const listingsWithOwner = initData.data.map(listing => ({
      ...listing,
      owner: ownerId,
      reviews: []
    }));

    await Listing.insertMany(listingsWithOwner);

    console.log("Database seeded successfully (Atlas)");
  } catch (err) {
    console.error("Seeding error:", err);
  } finally {
    await mongoose.connection.close();
  }
}

seedDB();
