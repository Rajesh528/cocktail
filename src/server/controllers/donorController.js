// backend/controllers/donorController.js
const Donor = require('../models/donor');

// Get all donors
const getAllDonors = async (req, res) => {
  try {
    const donors = await Donor.find();
    res.json(donors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add a new donor
const addDonor = async (req, res) => {
  const { name, email, phone } = req.body;
  try {
    const newDonor = new Donor({ name, email, phone });
    await newDonor.save();
    res.status(201).json(newDonor);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { getAllDonors, addDonor };
