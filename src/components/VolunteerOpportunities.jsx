import pic from '../assets/voluteer.png';

const VolunteerOpportunities = () => {
  return (
    <div id="get-involved">
    <h1 className="w-full text-center font-bold text-3xl mt-5 mb-2 font-serif">Get Involved</h1>
    <div className="w-full flex justify-center">
      <div className="flex flex-col md:flex-row bg-gray-200 w-[90%] m- rounded-2xl overflow-hidden">
        <div className="flex-1 flex flex-col justify-center items-center p-10">
          <h1 className="text-2xl text-center mb-5">Volunteer Opportunities</h1>
          <p className="text-center pb-5">
            Join us in making a difference! We offer various volunteer
            opportunities:
          </p>
          <div className="flex flex-col space-y-3">
            <div className="flex space-x-2">
              <p className="font-bold text-nowrap">Program Support:</p>
              <p>
                Assist in our vocational training, education support,
                healthcare, and shelter programs.
              </p>
            </div>
            <div className="flex space-x-2">
              <p className="font-bold">Advocacy:</p>
              <p>
                Help with campaigns to raise awareness and influence policy
                changes.
              </p>
            </div>
            <div className="flex space-x-2">
              <p className="font-bold">Community Outreach:</p>
              <p>
                Participate in local initiatives and support community events.
              </p>
            </div>
            <div className="flex space-x-2">
              <p className="font-bold">Administrative Support:</p>
              <p>Provide assistance with office tasks and event planning.</p>
            </div>
          </div>
          <button className="m-10 bg-orange-500 rounded-2xl w-[150px] h-[40px] text-white font-bold">
            Apply
          </button>
        </div>
        <div className="flex-none md:flex-1">
          <img
            className="h-full rounded-3xl"
            src={pic}
            alt="Volunteer"
          />
        </div>
      </div>
    </div>
    </div>
  );
};

export default VolunteerOpportunities;
