import { useState, useEffect } from "react";

const UpcomingEvents = () => {
  const [mainEvent, setMainEvent] = useState(null);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch the main event and other events from the backend
    const fetchEvents = async () => {
      try {
        const response = await fetch("http://localhost:3000/events"); // Replace with your API endpoint
        const data = await response.json();
        
        // Assume the main event is flagged with `isMain: true`
        const main = data.find(event => event.isMain);
        const otherEvents = data.filter(event => !event.isMain);
        
        setMainEvent(main);
        setEvents(otherEvents);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="p-8">
      <h1 className="w-full text-center font-bold text-3xl mt-5 mb-2 font-serif">
        Upcoming Events
      </h1>
      <div className="w-[93%] m-auto flex flex-col lg:flex-row justify-center gap-6 mt-8">
        {/* First column with main event detail */}
        {mainEvent && (
          <div className="w-full lg:w-1/2 flex flex-col bg-gray-200 rounded-2xl overflow-hidden">
            <img
              className="w-full h-64 object-cover"
              src={mainEvent.picture} // Assume your main event object has a picture property
              alt={mainEvent.title}
            />
            <div className="p-6 flex flex-col justify-between flex-grow">
              <h2 className="text-2xl font-bold mb-2 text-center">{mainEvent.title}</h2>
              <p className="text-center mb-4">{mainEvent.description}</p>
              <div className="flex justify-between items-center mt-5">
                <p className="text-gray-600">{new Date(mainEvent.date).toLocaleDateString()}</p>
                <button className="flex items-center bg-blue-500 rounded-2xl px-4 py-2 text-white font-bold">
                  Read More
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Second column displaying other events */}
        <div className="w-full lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
          {events.map((event) => (
            <div
              key={event._id}
              className="flex flex-col bg-gray-200 rounded-2xl overflow-hidden"
            >
              <img
                className="w-full h-32 object-cover"
                src={event.picture} // Assume your event object has a picture property
                alt={event.title}
              />
              <div className="p-4 flex flex-col justify-between flex-grow">
                <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                <p className="text-center mb-4">{event.description}</p>
                <div className="flex justify-between items-center mt-5">
                  <p className="text-gray-600">{new Date(event.date).toLocaleDateString()}</p>
                  <button className="flex items-center bg-blue-500 rounded-2xl px-4 py-2 text-white font-bold">
                    Read More
                    <svg
                      className="ml-2 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
