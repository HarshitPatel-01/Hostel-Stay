const mongoose = require("mongoose");
const initData = require("../init/data.js");
const Listing = require("../models/listings");

const MONGO_URL = "mongodb+srv://officialharshitpatel1_db_user:S64jSoQoQ2rAHxQu@cluster0.qqzwyux.mongodb.net/?appName=Cluster0";

// real user ID from DB
const ownerId = new mongoose.Types.ObjectId("69663a3cd68e40db1333dc4a");

async function seedDB() {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("✅ Connected to DB");

    // 🔥 Always clear old data (force reseed)
    await Listing.deleteMany({});

    const listingsWithOwner = initData.data.map((listing) => ({
      ...listing,
      owner: ownerId,
      reviews: [],
    }));

    await Listing.insertMany(listingsWithOwner);

    console.log("🌱 Database seeded successfully");
  } catch (err) {
    console.error("❌ Seeding error:", err);
  } finally {
    await mongoose.connection.close();
  }
}

seedDB();
