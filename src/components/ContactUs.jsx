import ContactForm from './ContactusForm';
import logo from '../assets/contactus.png';

const ContactUs = () => {
  return (
    <section className="p-8 m-3 w-11/12 mx-auto" id="contact">
      <h2 className="text-3xl text-center font-bold mb-4">Contact Us</h2>
      <div className="flex flex-col lg:flex-row bg-gray-200 rounded-xl items-center">
        <div className="w-full lg:w-1/2">
          <img src={logo} className="rounded-xl w-full h-full object-cover" alt="Contact Us" />
        </div>
        <div className="w-full lg:w-1/2 p-6">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
