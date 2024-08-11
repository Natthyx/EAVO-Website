import React, { useEffect, useState } from "react";
import backUrl from "../../constant";
import { Link } from 'react-router-dom';

const VolunteerTable = () => {
  const [volunteers, setVolunteers] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem('authToken');

  useEffect(() => {
    fetch(`${backUrl}/eavo/contactlist`, {
      method: 'GET',
      withCredentials: true,
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      }
    })
    .then((response) => response.json())
    .then((data) => {
      if (data.status) {
        setVolunteers(data.data);  // Access the array directly
      } else {
        console.error("Error fetching data:", data.message);
      }
      setLoading(false);
    })
    .catch((error) => {
      console.error("Error fetching volunteer data:", error);
      setLoading(false);
    });
  }, [token]);

  if (loading) {
    return <p className="text-center text-gray-500">Loading...</p>;
  }

  return (
    <div className="container p-6 bg-gray-100 rounded-lg shadow-lg min-h-screen">
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
      <h1 className="text-2xl font-semibold mb-4 text-center">Volunteer Contact Information</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 bg-gray-100 border-b">Name</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 bg-gray-100 border-b">Email</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 bg-gray-100 border-b">Phone</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 bg-gray-100 border-b">Country</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 bg-gray-100 border-b">Postal Code</th>
            </tr>
          </thead>
          <tbody>
            {volunteers.map((volunteer, index) => (
              <tr key={index}>
                <td className="px-6 py-4 border-b border-gray-200">{volunteer.fullName}</td>
                <td className="px-6 py-4 border-b border-gray-200">{volunteer.email}</td>
                <td className="px-6 py-4 border-b border-gray-200">{volunteer.phoneNumber}</td>
                <td className="px-6 py-4 border-b border-gray-200">{volunteer.country}</td>
                <td className="px-6 py-4 border-b border-gray-200">{volunteer.postalCode}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VolunteerTable;
