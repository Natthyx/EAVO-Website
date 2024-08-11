import { Link, Outlet } from "react-router-dom";

const AdminPage = () => (
  <div className="p-6 bg-gray-100 min-h-screen ">
    <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
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
    <Outlet /> {/* This is where the nested routes will be rendered */}
  </div>
);

export default AdminPage;
