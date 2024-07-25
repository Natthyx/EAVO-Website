import logo from '../assets/logo.png';
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white p-8 mt-8">
    <div className="absolute inset-y-full bottom-0 flex">
    <div className="w-1/2 bg-cover" style={{ backgroundImage: `url('src/assets/FooterA.png')` }}></div>
        <div className="w-1/2 bg-cover" style={{ backgroundImage: `url('src/assets/FooterB.png')` }}></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      <div className='p-5 items-center'>
        <img src={logo} className='w-3/5 bg-center'></img>
        <h1 className='text-xl text-left font-bold'>Empowering African Voices Organization </h1>
      </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#mission">Our Mission</a></li>
            <li><a href="#programs">Programs</a></li>
            <li><a href="#get-involved">Get Involved</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Programs</h3>
          <ul className="space-y-2">
            <li><a href="#programs">Women&apos;s Vocational Training</a></li>
            <li><a href="#programs">Child Education Support</a></li>
            <li><a href="#programs">Healthcare Initiatives</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Newsletter</h3>
          <p>Sign up for updates about our work and events.</p>
          <form className="flex items-center mt-4">
          <input type="email" placeholder="Email *" className="w-full p-3 border rounded-tl-lg mt-2" />
          <button className="bg-orange-500 text-white py-4 px-4 rounded-br-lg mt-2">Subscribe</button></form>
          <h3 className="text-xl font-bold mt-2 mb-4">Contact Us</h3>
          <div>
            <p className='flex items-center space-y-4'><FaPhone className='mr-3'/>+251-9123456789</p>
            <p className='flex items-center space-y-4'><MdOutlineEmail className='mr-3'/> info@eavo-ngo.org</p>
            <p className='flex items-center space-y-4'><CiLocationOn className='mr-3'/> Addis Ababa, Ethiopia, 1000</p>
          </div>
        </div>
      </div>
      <div className="text-center mt-8">
      <div className="space-x-4 flex justify-center text-4xl mb-4">
            <a className='hover:text-orange-600' href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a className='hover:text-orange-600' href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a className='hover:text-orange-600' href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          </div>
        <p>&copy; 2024 EAVO. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
