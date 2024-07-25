
const Program = ({title, description, imageUrl ,linkUrl} ) => (
  <div className="max-w-sm rounded overflow-hidden shadow-lg">
  
    <img className="w-full" src={imageUrl} alt={title} />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{title}</div>
      <p className="text-gray-700 text-base">
        {description}
      </p>
      <button className="flex items-center bg-blue-500 rounded-2xl px-4 mt-5 mb-3 py-2 text-white font-bold">
                  Learn More
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns={linkUrl}
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
);

export default Program;
