const express = require("express");
const router = express.Router();

// require the Drone model here
const Drone = require("../models/drone.model.js");

router.get("/drones", async (req, res, next) => {
  // Iteration #2: List the drones
  try {
    const drones = await Drone.find();
    console.log("DRONES");
    console.log(drones);

    res.status(200).json(drones);
  } catch (err) {
    next(err);
  }
});

router.post("/drones", async (req, res, next) => {
  // Iteration #3: Add a new drone
  try {
    const droneToAdd = req.body;
    const createNewDrone = await Drone.create(droneToAdd);
    res.status(201).json({ message: "CREATED :)", data: createNewDrone });
  } catch (err) {
    next(err);
  }
});

router.patch("/drones/:id", async (req, res, next) => {
  try {
    const droneId = req.params.id;
    const droneUpdated = await Drone.findByIdAndUpdate(droneId, req.body, {
      new: true,
    });
    res.status(200).json(droneUpdated);
  } catch (err) {
    console.log(err);
    next(err);
  }
});

router.delete("/drones/:id", async (req, res, next) => {
  // Iteration #5: Delete the drone
  try {
    const droneId = req.params.id;
    const removedDrone = await Drone.findByIdAndDelete(droneId);
    console.log(removedDrone);
    res.status(200).json({ response: "Drone removed", droneRemoved: removedDrone });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
