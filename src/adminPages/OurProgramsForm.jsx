import React, { useState, useEffect } from "react";
import axios from "axios";

const OurProgramsForm = () => {
  const [programs, setPrograms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showAddProgramForm, setShowAddProgramForm] = useState(false);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [newProgram, setNewProgram] = useState({
    picture: "",
    title: "",
    description: "",
  });
  const [currentProgram, setCurrentProgram] = useState(null);

  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        const response = await axios.get("http://localhost:3000/programs");
        console.log("API response:", response.data);

        if (Array.isArray(response.data)) {
          setPrograms(response.data);
        } else {
          throw new Error("Data is not an array");
        }

        setLoading(false);
      } catch (error) {
        setError("Failed to fetch programs");
        console.error("Error fetching programs:", error);
        setLoading(false);
      }
    };

    fetchPrograms();
  }, []);

  const handleDelete = async (id) => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this program?"
    );
    if (!isConfirmed) return;

    try {
      await axios.delete(`http://localhost:3000/programs/${id}`);
      setPrograms(programs.filter((program) => program._id !== id));
    } catch (error) {
      console.error("Error deleting program:", error);
      setError("Failed to delete program");
    }
  };

  const handleUpdate = (program) => {
    setCurrentProgram(program);
    setNewProgram(program); // Pre-fill the form with the current program data
    setShowUpdateForm(true);
  };

  const handleAddProgram = () => {
    setShowAddProgramForm(true);
  };

  const handleCloseAddProgramForm = () => {
    setShowAddProgramForm(false);
  };

  const handleCloseUpdateForm = () => {
    setShowUpdateForm(false);
    setCurrentProgram(null);
    setNewProgram({
      picture: "",
      title: "",
      description: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProgram({ ...newProgram, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (currentProgram) {
        // Update existing program
        const response = await axios.put(
          `http://localhost:3000/programs/${currentProgram._id}`,
          newProgram
        );
        setPrograms(
          programs.map((program) =>
            program._id === currentProgram._id ? response.data : program
          )
        );
      } else {
        // Add new program
        const response = await axios.post(
          "http://localhost:3000/programs",
          newProgram
        );
        setPrograms([...programs, response.data]);
      }
      setShowAddProgramForm(false);
      setShowUpdateForm(false);
      setNewProgram({
        picture: "",
        title: "",
        description: "",
      });
    } catch (error) {
      console.error("Error handling program:", error);
      setError("Failed to handle program");
    }
  };

  if (loading) {
    return <p className="text-center text-gray-500">Loading programs...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  return (
    <div className="our-programs p-6 bg-gray-100 rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-extrabold text-blue-700 border-b-4 border-blue-500 pb-2">
          Our Programs
        </h2>
        <button
          onClick={handleAddProgram}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Add Program
        </button>
      </div>

      {showAddProgramForm && (
        <div className="add-program-form bg-white p-4 mb-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-4">Add New Program</h3>
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
                value={newProgram.picture}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="title" className="block text-gray-700 font-bold">
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                className="border border-gray-300 rounded-md px-3 py-2 w-full"
                placeholder="Enter program title"
                value={newProgram.title}
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
                placeholder="Enter program description"
                value={newProgram.description}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mt-4 flex justify-end space-x-2">
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                {currentProgram ? "Update Program" : "Add Program"}
              </button>
              <button
                type="button"
                onClick={handleCloseAddProgramForm}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Close
              </button>
            </div>
          </form>
        </div>
      )}

      {showUpdateForm && (
        <div className="update-program-form bg-white p-4 mb-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-4">Update Program</h3>
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
                value={newProgram.picture}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="title" className="block text-gray-700 font-bold">
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                className="border border-gray-300 rounded-md px-3 py-2 w-full"
                placeholder="Enter program title"
                value={newProgram.title}
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
                placeholder="Enter program description"
                value={newProgram.description}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mt-4 flex justify-end space-x-2">
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Update Program
              </button>
              <button
                type="button"
                onClick={handleCloseUpdateForm}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Close
              </button>
            </div>
          </form>
        </div>
      )}

      <ul className="space-y-6">
        {programs.map((program) => (
          <li
            key={program._id}
            className="bg-white p-4 rounded-lg shadow-md border border-gray-300 transition-transform transform hover:shadow-xl"
          >
            <img
              src={program.picture}
              alt={program.title}
              className="mb-4 w-full h-48 object-cover rounded-lg shadow-sm"
            />
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              {program.title}
            </h3>
            <p className="text-gray-700 mb-4">{program.description}</p>
            <div className="flex space-x-2">
              <button
                onClick={() => handleUpdate(program)}
                className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
              >
                Update
              </button>
              <button
                onClick={() => handleDelete(program._id)}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OurProgramsForm;
