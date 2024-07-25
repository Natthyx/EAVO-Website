import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import UpcomingEventsForm from "./adminPages/UpcomingEventsForm.jsx";
import OurProgramsForm from "./adminPages/OurProgramsForm.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    {/* <UpcomingEventsForm /> */}
    {/* <OurProgramsForm /> */}
  </React.StrictMode>
);
