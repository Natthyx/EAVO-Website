import React from "react";

const DonationInformation = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-col md:flex-row bg-gray-200 w-[90%] m-10 rounded-2xl overflow-hidden">
        <div className="flex-none md:flex-1">
          <img
            className="h-full rounded-3xl"
            src="src/assets/image.png"
            alt="Volunteer"
          />
        </div>
        <div className="flex-1 flex flex-col justify-center items-center p-10">
          <h1 className="text-2xl text-center mb-5">Donation Information</h1>
          <p className="text-center pb-5">
            Your donations help us empower African women and children.
          </p>
          <div className="w-full p-4">
            <p className="font-bold text-xl text-left">Where the Funds Go:</p>
          </div>
          <div className="flex flex-col space-y-3">
            <div className="flex space-x-2">
              <p className="font-bold whitespace-nowrap">Education:</p>
              <p>Scholarships, school supplies, and tutoring.</p>
            </div>
            <div className="flex space-x-2">
              <p className="font-bold">Healthcare:</p>
              <p>Medical care, health education, and clinics.</p>
            </div>
            <div className="flex space-x-2">
              <p className="font-bold">Shelter:</p>
              <p>Safe havens, counseling, and support services.</p>
            </div>
            <div className="flex space-x-2">
              <p className="font-bold">Training Programs:</p>
              <p>Vocational training and community leadership development.</p>
            </div>
          </div>
          <button className="mt-5 bg-orange-500 rounded-2xl w-[150px] h-[40px] text-white font-bold">
            DONATE
          </button>
        </div>
      </div>
    </div>
  );
};

export default DonationInformation;
