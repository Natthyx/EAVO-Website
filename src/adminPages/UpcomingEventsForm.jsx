import { useState, useEffect } from "react";
import axios from "axios";

const UpcomingEventsForm = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showAddEventForm, setShowAddEventForm] = useState(false);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [newEvent, setNewEvent] = useState({
    picture: "",
    title: "",
    description: "",
    date: "",
    isMain: false,
  });
  const [currentEvent, setCurrentEvent] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get("http://localhost:3000/events");
        if (Array.isArray(response.data)) {
          setEvents(response.data);
        } else {
          throw new Error("Data is not an array");
        }
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch events");
        console.error("Error fetching events:", error);
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const handleDelete = async (id) => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this event?"
    );
    if (!isConfirmed) return;

    try {
      await axios.delete(`http://localhost:3000/events/${id}`);
      setEvents(events.filter((event) => event._id !== id));
    } catch (error) {
      console.error("Error deleting event:", error);
      setError("Failed to delete event");
    }
  };

  const handleUpdate = (event) => {
    setCurrentEvent(event);
    setNewEvent(event);
    setShowUpdateForm(true);
  };

  const handleAddEvent = () => {
    setShowAddEventForm(true);
  };

  const handleCloseAddEventForm = () => {
    setShowAddEventForm(false);
  };

  const handleCloseUpdateForm = () => {
    setShowUpdateForm(false);
    setCurrentEvent(null);
    setNewEvent({
      picture: "",
      title: "",
      description: "",
      date: "",
      isMain: false,
    });
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewEvent({ ...newEvent, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (currentEvent) {
        const response = await axios.put(
          `http://localhost:3000/events/${currentEvent._id}`,
          newEvent
        );
        setEvents(
          events.map((event) =>
            event._id === currentEvent._id ? response.data : event
          )
        );
      } else {
        const response = await axios.post(
          "http://localhost:3000/events",
          newEvent
        );
        setEvents([...events, response.data]);
      }
      setShowAddEventForm(false);
      setShowUpdateForm(false);
      setNewEvent({
        picture: "",
        title: "",
        description: "",
        date: "",
        isMain: false,
      });
      setCurrentEvent(null);
    } catch (error) {
      console.error("Error handling event:", error);
      setError("Failed to handle event");
    }
  };

  if (loading) {
    return <p className="text-center text-gray-500">Loading events...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  return (
    <div className="flex flex-col items-center py-6">
      <button
        onClick={handleAddEvent}
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mb-6"
      >
        Add Event
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-[90%]">
        {events.map((event) => (
          <div
            key={event._id}
            className="flex flex-col bg-gray-200 rounded-2xl overflow-hidden shadow-md"
          >
            <img
              src={event.picture}
              alt={event.title}
              className="rounded-t-2xl w-full h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {event.title}
              </h3>
              <p className="text-gray-700 mb-2">
                {new Date(event.date).toLocaleDateString()}
              </p>
              <p className="text-gray-600 mb-5 line-clamp-3">
                {event.description}
              </p>

              <div className="flex justify-end space-x-2">
                <button
                  onClick={() => handleUpdate(event)}
                  className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
                >
                  Update
                </button>
                <button
                  onClick={() => handleDelete(event._id)}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showAddEventForm && (
        <div className="add-event-form fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h3 className="text-xl font-bold mb-4">Add New Event</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="picture"
                  className="block text-gray-700 font-bold"
                >
                  Picture URL
                </label>
                <input
                  type="text"
                  id="picture"
                  name="picture"
                  className="border border-gray-300 rounded-md px-3 py-2 w-full"
                  placeholder="Enter picture URL"
                  value={newEvent.picture}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="title"
                  className="block text-gray-700 font-bold"
                >
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  className="border border-gray-300 rounded-md px-3 py-2 w-full"
                  placeholder="Enter event title"
                  value={newEvent.title}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="description"
                  className="block text-gray-700 font-bold"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  className="border border-gray-300 rounded-md px-3 py-2 w-full"
                  placeholder="Enter event description"
                  value={newEvent.description}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="date" className="block text-gray-700 font-bold">
                  Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  className="border border-gray-300 rounded-md px-3 py-2 w-full"
                  placeholder="Enter event date"
                  value={newEvent.date}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="isMain"
                  className="block text-gray-700 font-bold"
                >
                  Main Event
                </label>
                <input
                  type="checkbox"
                  id="isMain"
                  name="isMain"
                  className="mr-2 leading-tight"
                  checked={newEvent.isMain}
                  onChange={handleChange}
                />
                <span className="text-gray-600">Set as main event</span>
              </div>
              <div className="mt-4 flex justify-end space-x-2">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Submit
                </button>
                <button
                  type="button"
                  onClick={handleCloseAddEventForm}
                  className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {showUpdateForm && (
        <div className="update-event-form fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h3 className="text-xl font-bold mb-4">Update Event</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="picture"
                  className="block text-gray-700 font-bold"
                >
                  Picture URL
                </label>
                <input
                  type="text"
                  id="picture"
                  name="picture"
                  className="border border-gray-300 rounded-md px-3 py-2 w-full"
                  placeholder="Enter picture URL"
                  value={newEvent.picture}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="title"
                  className="block text-gray-700 font-bold"
                >
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  className="border border-gray-300 rounded-md px-3 py-2 w-full"
                  placeholder="Enter event title"
                  value={newEvent.title}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="description"
                  className="block text-gray-700 font-bold"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  className="border border-gray-300 rounded-md px-3 py-2 w-full"
                  placeholder="Enter event description"
                  value={newEvent.description}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="date" className="block text-gray-700 font-bold">
                  Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  className="border border-gray-300 rounded-md px-3 py-2 w-full"
                  placeholder="Enter event date"
                  value={newEvent.date}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="isMain"
                  className="block text-gray-700 font-bold"
                >
                  Main Event
                </label>
                <input
                  type="checkbox"
                  id="isMain"
                  name="isMain"
                  className="mr-2 leading-tight"
                  checked={newEvent.isMain}
                  onChange={handleChange}
                />
                <span className="text-gray-600">Set as main event</span>
              </div>
              <div className="mt-4 flex justify-end space-x-2">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Update
                </button>
                <button
                  type="button"
                  onClick={handleCloseUpdateForm}
                  className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default UpcomingEventsForm;
