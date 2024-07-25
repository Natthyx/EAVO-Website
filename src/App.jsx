import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Modal from "./components/Modal";
import { useState } from "react";
import HomePage from "./pages/HomePage";
import UpcomingEvents from "./components/UpcomingEvents";
import VolunteerOpportunities from "./components/VolunteerOpportunities";
import DonationInformation from "./components/DonationInformation";
import AboutUs from "./components/AboutUs";

import AdminPage from "./adminPages/AdminPage";
import OurProgramsForm from "./adminPages/OurProgramsForm";
import UpcomingEventsForm from "./adminPages/UpcomingEventsForm";

function App() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <Router>
      <Header />
      <div className="flex items-center justify-end pr-4 z-50">
        <div className="fixed -left-10 top-1/2 transform -translate-y-1/2">
          <button
            className="flex items-center bg-green-500 text-white px-4 py-2 rounded transition-transform duration-300 transform hover:scale-110 hover:bg-yellow-400 rotate-[270deg]"
            onClick={() => setOpenModal(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18l-1-1.15C4.5 12.1 2 9.5 2 6.5 2 4.5 3.5 3 5.5 3c1.08 0 2.116.47 2.832 1.29C8.584 3.47 9.58 3 10.66 3 12.74 3 14.25 4.5 14.25 6.5c0 3-2.5 5.6-7 10.35L10 18z"
                clipRule="evenodd"
              />
            </svg>
            Donate
          </button>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/volunteer" element={<VolunteerOpportunities />} />
        <Route path="/donation" element={<DonationInformation />} />
        <Route path="/events" element={<UpcomingEvents />} />
        <Route path="/admin" element={<AdminPage />}>
          <Route path="add-event" element={<UpcomingEventsForm />} />
          <Route path="add-program" element={<OurProgramsForm />} />
        </Route>
        {/* Add more routes as needed */}
      </Routes>

      <Modal isOpen={openModal} onClose={() => setOpenModal(false)}>
        <h2 className="text-2xl font-bold mb-4">Modal Title</h2>
        <p>This is the modal content.</p>
      </Modal>
    </Router>
  );
}

export default App;
