import logo from '../assets/logo.png';

const Header = () => {
  return (
    <header className="flex justify-between items-center bg-blue-900 p-4">
      <img src={logo} alt="EAVO Logo" className="h-14 cursor-pointer" />
      <nav>
        <ul className="flex space-x-4 text-white">
          <li><a className='hover:text-orange-600' href="#home">Home</a></li>
          <li><a className='hover:text-orange-600' href="#about">About Us</a></li>
          <li><a className='hover:text-orange-600' href="#mission">Our Mission</a></li>
          <li><a className='hover:text-orange-600' href="#programs">Programs</a></li>
          <li><a className='hover:text-orange-600' href="#get-involved">Get Involved</a></li>
          <li><a className='hover:text-orange-600' href="#contact">Contact Us</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
