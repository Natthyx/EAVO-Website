const express = require('express');
const router = express.Router();
const {
  getAllEvents,
  createEvent,
  getEventById,
  updateEvent,
  deleteEvent,
} = require('../controllers/eventController');

// Get all events
router.get('/', getAllEvents);
// Create a new event
router.post('/', createEvent);
// Get event by ID
router.get('/:id', getEventById);
// Update event by ID
router.put('/:id', updateEvent);
// Delete event by ID
router.delete('/:id', deleteEvent);

module.exports = router;
