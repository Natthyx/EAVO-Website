import React from "react";

const UpcomingEvents = () => {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-[90%] ">
        <div className="flex flex-col bg-gray-200 rounded-2xl overflow-hidden">
          <div>
            <img
              className="rounded-3xl w-full"
              src="src/assets/image.png"
              alt="Volunteer"
            />
          </div>
          <div className="p-5">
            <p className="text-center pb-5">
              Today's event is all about empowerment, advocacy, and support for
              African women and children. The event will be held in Addis Ababa,
              Ethiopia, at the Adawa Museum main hall. Please contact us for
              more detailed information.
            </p>
            <div className="flex justify-between items-center mt-5">
              <p className="text-gray-600">July 23, 2024</p>
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
      </div>
    </div>
  );
};

export default UpcomingEvents;
