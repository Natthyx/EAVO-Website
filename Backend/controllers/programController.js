const Program = require('../models/program');

// Get all programs
const getAllPrograms = async (req, res) => {
  try {
    const programs = await Program.find();
    res.json(programs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new program
const createProgram = async (req, res) => {
  const program = new Program({
    picture: req.body.picture,
    title: req.body.title,
    description: req.body.description
  });

  try {
    const newProgram = await program.save();
    res.status(201).json(newProgram);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get program by ID
const getProgramById = async (req, res) => {
  try {
    const program = await Program.findById(req.params.id);
    if (!program) return res.status(404).json({ message: 'Program not found' });
    res.json(program);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update program by ID
const updateProgram = async (req, res) => {
  try {
    const program = await Program.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
    if (!program) return res.status(404).json({ message: 'Program not found' });
    res.json(program);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete program by ID
const deleteProgram = async (req, res) => {
  try {
    const program = await Program.findByIdAndDelete(req.params.id);
    if (!program) return res.status(404).json({ message: 'Program not found' });
    res.json({ message: 'Program deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllPrograms,
  createProgram,
  getProgramById,
  updateProgram,
  deleteProgram
};
