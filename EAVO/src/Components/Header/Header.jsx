import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import axios from "axios";
import backUrl from "../../constant";
import logo from "../../assets/Images/logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    console.log("Token from localStorage:", token);
    setIsLoggedIn(!!token); // Set isLoggedIn based on whether the token exists
  }, []);
  console.log("Is Logged In:", isLoggedIn);
  const handleLogout = async () => {
    const token = localStorage.getItem("authToken");
    console.log("Attempting to log out with token:", token);

    try {
      const response = await axios.post(`${backUrl}/eavo/admin/logout`, {
        withCredentials: true,
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      console.log("Logout response:", response.data);
      if (response.data.status) {
        // Clear the token from localStorage
        localStorage.removeItem("authToken");
        setIsLoggedIn(false);
        navigate("/");
        window.location.reload(); // Reload the page to update the header state
      }
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-blue-950 text-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className=" w-1/3">
          <Link to="/" className="text-2xl font-bold">
            <img src={logo} alt="EAVO Logo" className="h-28 w-32" />
          </Link>
        </div>

        <nav className="hidden md:flex w-2/3 justify-end space-x-12 mt-2">
         <Link to="/" className="hover:text-orange-500 hover:underline">
            Home
          </Link>
          <Link to="/aboutus" className="hover:text-orange-500 hover:underline">
            About Us
          </Link>
          <Link
            to="/OurMission"
            className="hover:text-orange-500 hover:underline"
          >
            Our Mission
          </Link>
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="hover:text-orange-500 hover:underline focus:outline-none flex items-center"
            >
              Programs
              <ArrowDropDownIcon
                className="text-orange-500 ml-1"
                style={{ fontSize: "30px" }}
                onClick={() => setDropdownOpen(false)}
              />
            </button>
            {dropdownOpen && (
              <div className="absolute mt-2 w-48 font-semibold  bg-orange-300 text-black rounded shadow-lg z-50">
                <Link
                  to="/WomenTraining"
                  className="block px-4 py-2 hover:bg-gray-200"
                  onClick={() => setDropdownOpen(false)}
                >
                  Women&apos;s Vocational Training
                </Link>
                <hr />
                <Link
                  to="/ChildSupport"
                  className="block px-4 py-2 hover:bg-gray-200"
                  onClick={() => setDropdownOpen(false)}
                >
                  Child Education Support
                </Link>
                <hr />
                <Link
                  to="/Healthcare"
                  className="block px-4 py-2 hover:bg-gray-200"
                  onClick={() => setDropdownOpen(false)}
                >
                  Healthcare Initiatives
                </Link>
                <hr />
                <Link
                  to="/EducationIntiative"
                  className="block px-4 py-2 hover:bg-gray-200"
                  onClick={() => setDropdownOpen(false)}
                >
                  Education Initiative
                </Link>
                <hr />
                <Link
                  to="/SafeShelter"
                  className="block px-4 py-2 hover:bg-gray-200"
                  onClick={() => setDropdownOpen(false)}
                >
                  Safe Shelter Program
                </Link>
                <hr />
                <Link
                  to="/CommunityLeadership"
                  className="block px-4 py-2 hover:bg-gray-200"
                  onClick={() => setDropdownOpen(false)}
                >
                  Community Leadership Training
                </Link>
                <hr />
                <Link
                  to="/AdvocacyAwareness"
                  className="block px-4 py-2 hover:bg-gray-200"
                  onClick={() => setDropdownOpen(false)}
                >
                  Advocacy and Awareness Campaign
                </Link>
                <hr />
                <Link
                  to="/CommunitySupport"
                  className="block px-4 py-2 hover:bg-gray-200"
                  onClick={() => setDropdownOpen(false)}
                >
                  Community Support
                </Link>
                <hr />
                <Link
                  to="/Charity"
                  className="block px-4 py-2 hover:bg-gray-200"
                  onClick={() => setDropdownOpen(false)}
                >
                  Charity
                </Link>
              </div>
            )}
          </div>
          <Link
            to="/getinvolved"
            className="hover:text-orange-500 hover:underline"
          >
            Get Involved
          </Link>
          <Link
            to="/contactus"
            className="hover:text-orange-500 hover:underline"
          >
            Contact Us
          </Link>
          <Link to="/Signup" className="hover:text-orange-500 hover:underline">
            SignUp
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <>
          <div className="fixed top-0 right-0 h-full w-1/3 bg-blue-950 z-50 shadow-lg">
            <div className="p-4 space-y-2">
              <Link
                to="/"
                className="block hover:text-orange-500 hover:underline"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/aboutus"
                className="block hover:text-orange-500 hover:underline"
                onClick={() => setMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                to="/ourmission"
                className="block hover:text-orange-500 hover:underline"
                onClick={() => setMenuOpen(false)}
              >
                Our Mission
              </Link>
              <div className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="block w-full text-left hover:text-orange-500 hover:underline focus:outline-none flex items-center"
                >
                  Programs
                  <ArrowDropDownIcon className="text-orange-500 ml-1" />
                </button>
                {dropdownOpen && (
                  <div className="mt-2 bg-white text-black rounded shadow-lg">
                    <Link
                      to="/WomenTraining"
                      className="block px-4 py-2 hover:bg-gray-200"

                      onClick={() => setMenuOpen(false)}
                    >
                      Women's Vocational Training
                    </Link>
                    <Link
                      to="/ChildSupport"
                      className="block px-4 py-2 hover:bg-gray-200"
                      onClick={() => setMenuOpen(false)}
                    >
                      Child Education Support
                    </Link>
                    <Link
                      to="/Healthcare"
                      className="block px-4 py-2 hover:bg-gray-200"
                      onClick={() => setMenuOpen(false)}
                    >
                      Healthcare Initiatives
                    </Link>
                    <Link
                      to="/EducationIntiative"
                      className="block px-4 py-2 hover:bg-gray-200"
                      onClick={() => setMenuOpen(false)}
                    >
                      Education Initiative
                    </Link>
                    <Link
                      to="/SafeShelter"
                      className="block px-4 py-2 hover:bg-gray-200"
                      onClick={() => setMenuOpen(false)}
                    >
                      Safe Shelter Program
                    </Link>
                    <Link
                      to="/CommunityLeadership"
                      className="block px-4 py-2 hover:bg-gray-200"
                      onClick={() => setMenuOpen(false)}
                    >
                      Community Leadership Training
                    </Link>
                    <Link
                      to="/AdvocacyAwareness"
                      className="block px-4 py-2 hover:bg-gray-200"
                      onClick={() => setMenuOpen(false)}
                    >
                      Advocacy and Awareness Campaign
                    </Link>
                    <Link
                      to="/CommunitySupport"
                      className="block px-4 py-2 hover:bg-gray-200"
                      onClick={() => setMenuOpen(false)}
                    >
                      Community Support
                    </Link>
                    <Link
                      to="/Charity"
                      className="block px-4 py-2 hover:bg-gray-200"
                      onClick={() => setMenuOpen(false)}
                    >
                      Charity
                    </Link>
                  </div>
                )}
              </div>
              <Link
                to="/getinvolved"
                className="block hover:text-orange-500 hover:underline"
                onClick={() => setMenuOpen(false)}
              >
                Get Involved
              </Link>
              <Link
                to="/contactus"
                className="block hover:text-orange-500 hover:underline"
                onClick={() => setMenuOpen(false)}
              >
                Contact Us
              </Link>
              {isLoggedIn ? (
                <Link
                  to="/"
                  className="block hover:text-orange-500 hover:underline"
                  onClick={() => {
                    setMenuOpen(false);
                    handleLogout();
                  }}
                >
                  Log Out
                </Link>
              ) : (
                <Link
                  to="/Signup"
                  className="block hover:text-orange-500 hover:underline"
                  onClick={() => setMenuOpen(false)}
                >
                  Sign Up
                </Link>
              )}
            </div>
          </div>

          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
            onClick={() => setMenuOpen(false)}
          ></div>
        </>
      )}
    </header>
  );
};

export default Header;
