const mongoose = require("mongoose");
const initData = require("../init/data.js");
const Listing = require("../models/listing");

// 👉 Pick a real user ID from your DB!
const ownerId = "69663a3cd68e40db1333dc4a";

const MONGO_URL = "mongodb://127.0.0.1:27017/Home-Stay";

async function seedDB() {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("Connected to DB");

    const count = await Listing.countDocuments();

    if (count === 0) {
      // Add owner to every seed document
      const listingsWithOwner = initData.data.map((listing) => ({
        ...listing,
        owner: ownerId,
      }));

      await Listing.insertMany(listingsWithOwner);
      console.log("✅ Database seeded successfully with owner");
    } else {
      console.log("⚠️ Data already exists, skipping seeding");
    }
  } catch (err) {
    console.error(err);
  } finally {
    mongoose.connection.close();
  }
}
console.log("ONE SEED:", initData.data[0]);

seedDB();
