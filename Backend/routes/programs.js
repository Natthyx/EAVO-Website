// routes/programs.js
const express = require('express');
const router = express.Router();
const Program = require('../models/program');
const {
  getAllPrograms,
  createProgram,
  getProgramById,
  updateProgram,
  deleteProgram
} = require('../controllers/programController');

// Get all programs
router.get('/', getAllPrograms);
// Create a new program
router.post('/', createProgram);
// Get program by ID
router.get('/:id', getProgramById);
// Update program by ID
router.put('/:id', updateProgram);
// Delete program by ID
router.delete('/:id', deleteProgram);

module.exports = router;
