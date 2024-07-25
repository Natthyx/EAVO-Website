import pic from "../assets/mainevent.png";
import event1 from "../assets/event1.png";
import event2 from "../assets/event2.png";
import event3 from "../assets/event3.png";
import event4 from "../assets/event4.png";

const UpcomingEvents = () => {
  return (
    <div className="p-8">
      <h1 className="w-full text-center font-bold text-3xl mt-5 mb-2 font-serif">
        Upcoming Events
      </h1>
      <div className="w-[93%] m-auto flex flex-col lg:flex-row justify-center gap-6 mt-8">
        {/* First column with one picture and event detail */}
        <div className="w-full lg:w-1/2 flex flex-col bg-gray-200 rounded-2xl overflow-hidden">
          <img
            className="w-full h-64 object-cover"
            src={pic}
            alt="Main Event"
          />
          <div className="p-6 flex flex-col justify-between flex-grow">
            <p className="text-center">
              Today&apos;s event is all about empowerment, advocacy, and support
              for African women and children. The event will be held in Addis
              Ababa, Ethiopia, at the Adawa Museum main hall. Please contact us
              for more detailed information.
            </p>
            <div className="flex justify-between items-center mt-5">
              <p className="text-gray-600">Today, 07 July 2024</p>
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

        {/* Second column divided into 2x2 grid */}
        <div className="w-full lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col bg-gray-200 rounded-2xl overflow-hidden">
            <img
              className="w-full h-32 object-cover"
              src={event1}
              alt="Annual Fundraising"
            />
            <div className="p-4 flex flex-col justify-between flex-grow">
              <h3 className="text-xl font-bold mb-2">Annual Fundraising</h3>
              <p className="text-center">
                An evening of dinner, entertainment, and fundraising for our
                programs...
              </p>
              <div className="flex justify-between items-center mt-5">
                <p className="text-gray-600">15 July 2024</p>
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
          <div className="flex flex-col bg-gray-200 rounded-2xl overflow-hidden">
            <img
              className="w-full h-32 object-cover"
              src={event2}
              alt="Community Health Fair"
            />
            <div className="p-4 flex flex-col justify-between flex-grow">
              <h3 className="text-xl font-bold mb-2">Community Health Fair</h3>
              <p className="text-center">
                Free health screenings and education for local communities...
              </p>
              <div className="flex justify-between items-center mt-5">
                <p className="text-gray-600">30 July 2024</p>
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
          <div className="flex flex-col bg-gray-200 rounded-2xl overflow-hidden">
            <img
              className="w-full h-32 object-cover"
              src={event3}
              alt="Empowerment Workshops"
            />
            <div className="p-4 flex flex-col justify-between flex-grow">
              <h3 className="text-xl font-bold mb-2">Empowerment Workshops</h3>
              <p className="text-center">
                Workshops focusing on skill development and leadership
                training...
              </p>
              <div className="flex justify-between items-center mt-5">
                <p className="text-gray-600">20 Aug 2024</p>
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
          <div className="flex flex-col bg-gray-200 rounded-2xl overflow-hidden">
            <img
              className="w-full h-32 object-cover"
              src={event4}
              alt="Youth Empowerment Summit"
            />
            <div className="p-4 flex flex-col justify-between flex-grow">
              <h3 className="text-xl font-bold mb-2">
                Youth Empowerment Summit
              </h3>
              <p className="text-center">
                A summit for young leaders to discuss and address issues facing
                youth in Africa...
              </p>
              <div className="flex justify-between items-center mt-5">
                <p className="text-gray-600">10 Sept 2024</p>
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
    </div>
  );
};

export default UpcomingEvents;
