import React, { useState, useRef } from "react";
import ReactDOM from "react-dom";
import PaymentForm from "./PatmentForm";

const Modal = ({ isOpen, onClose }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const paymentFormRef = useRef(null);

  const handleFirstNameChange = (e) => setFirstName(e.target.value);
  const handleLastNameChange = (e) => setLastName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePhoneNumberChange = (e) => setPhoneNumber(e.target.value);
  const handleAmountChange = (e) => setAmount(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");
    setSuccessMessage("");

    try {
      // Perform any additional actions or validations if needed
      if (paymentFormRef.current) {
        if (phoneNumber.length == 10) {
          paymentFormRef.current.submitForm();
          setSuccessMessage("Donation successful. Thank you for your support!");
        } else setErrorMessage("Phone number must be 10 digits");
      }
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 bg-slate-500 bg-opacity-50 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-lg shadow-lg z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex space-x-4">
            <div>
              <label
                htmlFor="firstName"
                className="block text-gray-700 font-bold"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                className="border border-gray-300 rounded-md px-3 py-2 w-full"
                placeholder="Enter your first name"
                value={firstName}
                onChange={handleFirstNameChange}
                required
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-gray-700 font-bold"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                className="border border-gray-300 rounded-md px-3 py-2 w-full"
                placeholder="Enter your last name"
                value={lastName}
                onChange={handleLastNameChange}
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 font-bold">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="border border-gray-300 rounded-md px-3 py-2 w-full"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div>
            <label
              htmlFor="phoneNumber"
              className="block text-gray-700 font-bold"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              className="border border-gray-300 rounded-md px-3 py-2 w-full"
              placeholder="Enter your phone number"
              minLength={10}
              maxLength={11}
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              required
            />
          </div>
          <div>
            <label htmlFor="amount" className="block text-gray-700 font-bold">
              Amount
            </label>
            <input
              type="number"
              id="amount"
              className="border border-gray-300 rounded-md px-3 py-2 w-full"
              placeholder="Enter the amount of money"
              value={amount}
              onChange={handleAmountChange}
              min={0}
              required
            />
          </div>
          {errorMessage && <div className="text-red-500">{errorMessage}</div>}
          {successMessage && (
            <div className="text-green-500">{successMessage}</div>
          )}
          <div className="mt-4 flex justify-end space-x-2">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Donate
            </button>
            <button
              type="button"
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </form>
        <PaymentForm
          ref={paymentFormRef}
          amount={amount}
          email={email}
          firstName={firstName}
          lastName={lastName}
          phoneNumber={phoneNumber}
        />
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;
