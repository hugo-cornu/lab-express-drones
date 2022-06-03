// Import Mongoose and its methods
const { Schema, SchemaTypes, model } = require("mongoose");

// Setup the drone schema

const droneSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    propellers: Number,
    maxSpeed: Number,
  },
  {
    timestamp: true,
  }
);

const Drone = model("Drone", droneSchema);

module.exports = Drone;
