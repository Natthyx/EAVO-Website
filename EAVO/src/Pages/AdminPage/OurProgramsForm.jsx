// admin-page/our_program.jsx
import { useState, useEffect } from "react";
import axios from "axios";
import backUrl from "../../constant";
import { Link } from "react-router-dom";

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
    linkUrl: "", // Add this field
  });
  const [currentProgram, setCurrentProgram] = useState(null);
const token = localStorage.getItem('authToken')
  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        const response = await axios.get(`${backUrl}/eavo/programs`,
          {
            withCredentials: true,
            headers: {
              'Authorization': `Bearer ${token}`  // Include the token in the header
            }
          }
        );
        if (Array.isArray(response.data)) {
          setPrograms(response.data);
        } else {
          throw new Error("Data is not an array");
        }
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch programs");
        setLoading(false);
      }
    };
    fetchPrograms();
  }, [token]);

  const handleDelete = async (id) => {
    const isConfirmed = window.confirm("Are you sure you want to delete this program?");
    if (!isConfirmed) return;

    try {
      await axios.delete(`${backUrl}/eavo/programs/${id}`,
        {
          withCredentials: true,
          headers: {
            'Authorization': `Bearer ${token}`  // Include the token in the header
          }
        }
      );
      setPrograms(programs.filter((program) => program._id !== id));
    } catch (error) {
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
      linkUrl: "",
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
        const response = await axios.put(`${backUrl}/eavo/programs/${currentProgram._id}`, newProgram,
          {
            withCredentials: true,
            headers: {
              'Authorization': `Bearer ${token}`  // Include the token in the header
            }
          }
        );
        setPrograms(programs.map((program) => (program._id === currentProgram._id ? response.data : program)));
      } else {
        // Add new program
        const response = await axios.post(`${backUrl}/eavo/programs`, newProgram,
          {
            withCredentials: true,
            headers: {
              'Authorization': `Bearer ${token}`  // Include the token in the header
            }
          }
        );
        setPrograms([...programs, response.data]);
      }
      setShowAddProgramForm(false);
      setShowUpdateForm(false);
      setNewProgram({
        picture: "",
        title: "",
        description: "",
        linkUrl: "", // Reset the field
      });
      setCurrentProgram(null);
    } catch (error) {
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
    <div className="our-programs p-6 bg-gray-100 rounded-lg shadow-lg min-h-screen">
    <nav className="mb-6">
      <ul className="flex space-x-4">
        <li>
          <Link to="/admin/add-event" className="text-blue-500 hover:underline">
            Add Event
          </Link>
        </li>
        <li>
          <Link to="/admin/add-program" className="text-blue-500 hover:underline">
            Add Program
          </Link>
        </li>
        <li>
          <Link to="/admin/add-volunteer" className="text-blue-500 hover:underline">
            List of Volunteer
          </Link>
        </li>
      </ul>
    </nav>
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
              <label htmlFor="picture" className="block text-gray-700 font-bold">
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
              <label htmlFor="description" className="block text-gray-700 font-bold">
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
            <div>
              <label htmlFor="linkUrl" className="block text-gray-700 font-bold">
                Link URL
              </label>
              <input
                type="text"
                id="linkUrl"
                name="linkUrl"
                className="border border-gray-300 rounded-md px-3 py-2 w-full"
                placeholder="Enter link URL"
                value={newProgram.linkUrl}
                onChange={handleChange}
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              {currentProgram ? "Update Program" : "Add Program"}
            </button>
            <button
              type="button"
              onClick={currentProgram ? handleCloseUpdateForm : handleCloseAddProgramForm}
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 ml-2"
            >
              Cancel
            </button>
          </form>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-[90%]">
        {programs.map((program) => (
          <div
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
              <a
                href={program.linkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                View More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurProgramsForm;
