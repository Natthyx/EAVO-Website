

const ContactForm = () => {
  return (
    <form className="p-6 bg-gray-200 rounded-xl w-full">
      <h3 className="text-center text-xl font-bold mb-4">Contact Form</h3>
      <div className="mb-4">
        <label className="block mb-1 font-semibold">Full Name:</label>
        <input type="text" name="name" className="w-full p-2 border rounded" placeholder="Enter Full Name" />
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-semibold">Email:</label>
        <input type="email" name="email" className="w-full p-2 border rounded" placeholder="Enter Email" />
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-semibold">Phone Number:</label>
        <input type="text" name="phone" className="w-full p-2 border rounded" placeholder="Country Code" />
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-semibold">Country:</label>
        <select name="country" className="w-full p-2 border rounded">
          <option>Select Country</option>
          {/* Add more options here */}
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-semibold">Postal Code:</label>
        <input type="text" name="postal" className="w-full p-2 border rounded" placeholder="Enter Postal Code" />
      </div>
      <button type="submit" className="w-full bg-orange-500 text-white py-2 rounded font-bold">Submit</button>
    </form>
  );
};

export default ContactForm;
