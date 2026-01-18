require("dotenv").config({ path: "../.env" });
const mongoose = require("mongoose");
const initData = require("../init/Boat-data.js");
const BoatListing = require("../models/BoatListings"); 

//const MONGO_URL = "mongodb://127.0.0.1:27017/Home-Stay";
const MONGO_URL = process.env.ATLASDB_URL;

const ownerId = new mongoose.Types.ObjectId("69663a3cd68e40db1333dc4a");

async function seedBoats() {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("Connected to MongoDB Local");

    // Optional: clear only boats
    await BoatListing.deleteMany({});

    const boatListingsWithOwner = initData.data.map(listing => ({
      ...listing,
      owner: ownerId,
      reviews: [],
    }));

    await BoatListing.insertMany(boatListingsWithOwner);

    console.log("🚤 Boat data seeded into BoatListing collection");
  } catch (err) {
    console.error("Boat seeding error:", err);
  } finally {
    await mongoose.connection.close();
  }
}

seedBoats();
