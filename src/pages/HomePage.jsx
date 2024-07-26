import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import AboutUs from "../components/AboutUs";
import Impact from "../components/Impact";
import OurMission from "../components/OurMission";
import VolunteerOpportunities from "../components/VolunteerOpportunities";
import DonationInformation from "../components/DonationInformation";
import UpcomingEvents from "../components/UpcomingEvents";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";

const HomePage = () => (
  <div>
    <HeroSection />
    <AboutUs />
    <Impact />
    <OurMission />
    <VolunteerOpportunities />
    <DonationInformation />
    <UpcomingEvents />
    <ContactUs/>
    <Footer />
  </div>
);

export default HomePage;
