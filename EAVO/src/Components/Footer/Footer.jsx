import React, { useState } from 'react';import logo from "../../assets/Images/logo.jpg";
import { Phone, Email, LocationOn } from "@mui/icons-material";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import backUrl from '../../constant';
const Footer = () => {
  const [email, setEmail] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  // Handle email input change
  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission

    const apiUrl = `${backUrl}/eavo/user/news/subscribe`; 

    // Prepare the request payload
    const payload = {
      email: email
    };

    try {
      // Send POST request to the API
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      // Check if the response is okay
      if (response.ok) {
        const result = await response.json();
        setResponseMessage(result.message);
        setEmail('');
      } else {
        console.error('Failed to submit email');
      }
    } catch (error) {
      console.error('Error submitting email:', error);
    }
    setEmail('');
  };

  const year = new Date().getFullYear();

  return (
    <footer className="bg-blue-950 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
        {/* Column 1: Logo and Name */}
        <div className="flex flex-col items-start pt-10">
          <img src={logo} alt="EAVO Logo" className="mb-4 ml-16 h-42 w-48" />
          <div className="text-5xl font-bold ml-6">Empowering</div>
          <div className="text-8xl font-bold ml-5">African</div>
          <div className="text-3xl font-bold ml-7">voices organization</div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-orange-500 text-3xl font-bold mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="/aboutus" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="/ourmission" className="hover:underline">
                Our Mission
              </a>
            </li>
            <li>
              <a href="/programs" className="hover:underline">
                Programs
              </a>
            </li>
            <li>
              <a href="/getinvolved" className="hover:underline">
                Get Involved
              </a>
            </li>
            <li>
              <a href="/contactus" className="hover:underline">
                Contact Us
              </a>
            </li>
            <li>
              <a href="/privacypolicy" className="hover:underline">
                Privacy Policy,Terms of service
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Programs */}
        <div>
          <h3 className="text-orange-500 text-3xl font-bold mb-4">Programs</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="/WomenTraining"
                className="hover:underline "
              >
                Women&apos;s Vocational Training
              </a>
            </li>
            <li>
              <a
                href="/ChildSupport"
                className="hover:underline"
              >
                Child Education Support
              </a>
            </li>
            <li>
              <a
                href="/HealthCare"
                className="hover:underline"
              >
                Healthcare Initiatives
              </a>
            </li>
            <li>
              <a
                href="/EducationIntiative"
                className="hover:underline"
              >
                Education Initiative
              </a>
            </li>
            <li>
              <a
                href="/SafeShelter"
                className="hover:underline"
              >
                Safe shelter program
              </a>
            </li>
            <li>
              <a
                href="/CommunityLeadership"
                className="hover:underline"
              >
                Community leadership training
              </a>
            </li>
            <li>
              <a
                href="/AdvocacyAwareness"
                className="hover:underline"
              >
                Advocacy and Awareness Compaign
              </a>
            </li>
            <li>
              <a
                href="/CommunitySupport"
                className="hover:underline"
              >
                Community support
              </a>
            </li>
            <li>
              <a
                href="/Charity"
                className="hover:underline"
              >
                charity
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4: Newsletter and Contact Info */}
        <div>
          <div className="text-orange-500 text-3xl font-bold mb-4">
            News Letter
          </div>
          <div className="text-xxl">
            Get Notification & Newsletter about Education
            <br />
            Health Care access Community Support Charity
          </div>
        
          <form className="flex space-x-0 mt-3" onSubmit={handleSubmit} >
            <input
              type="email"
              value={email}
              onChange={handleChange}
              placeholder="Enter your email *"
              className="flex-1 text-gray-700 placeholder-red-500 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 w-full p-3 border rounded-tl-lg mt-2"
            />
            <button
              type="submit"
              className="bg-orange-500 text-white rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 py-4 px-4 rounded-br-lg mt-2"
            >
              Subscribe
            </button>
          </form>

          {responseMessage && (
            <div className="mt-4 text-white">
              {responseMessage}
            </div>
          )}

          <div className="mt-6">
            <h3 className="text-orange-500 text-3xl font-bold mb-4">
              Contact Us
            </h3>
            <p className="flex items-center mb-2">
              <Phone className="mr-2" /> +251-912345678
            </p>
            <p className="flex items-center mb-2">
              <Email className="mr-2" /> info@eavo-ngo.org
            </p>
            <p className="flex items-center">
              <LocationOn className="mr-2" />  Addis Ababa,
              Ethiopia, 1000
            </p>
          </div>
        </div>
      </div>
      <div className="text-center mt-14">
      <div className="space-x-4 flex justify-center text-5xl mb-7">
            <a className='hover:text-orange-600' href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a className='hover:text-orange-600' href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a className='hover:text-orange-600' href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          </div>
        <p>&copy; {year} EAVO. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
