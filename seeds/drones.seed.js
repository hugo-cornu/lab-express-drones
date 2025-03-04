// Importing models
const mongoose = require("mongoose");
const Drone = require("../models/drone.model.js");
const openConnection = require("../db/index.js");

// Defining three different drones.
const drones = [
  { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
  { name: "Racer 57", propellers: 4, maxSpeed: 20 },
  { name: "Courier 3000i", propellers: 6, maxSpeed: 18 },
];

async function createDrone() {
  try {
    await openConnection();

    await Drone.deleteMany();
    const createdDrone = await Drone.create(drones);
    console.log(`${drones.length} drones created`);

    await mongoose.connection.close();
    console.log("Connection closed.");
  } catch (err) {
    console.error("Error connecting to the database", err);
  }
}

createDrone();
