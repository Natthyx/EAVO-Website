import heroImage from '../assets/hero.png';

const HeroSection = () => {
  return (
    <section className="flex justify-between items-center bg-gradient-to-r from-blue-900 m-2 rounded-lg px-2 w-11/12 mx-auto shadow-md">
      <div className="p-4 w-2/4">
        <h1 className="text-4xl text-white font-bold mb-4">Empowering African Women and Children for a Brighter Future.</h1>
        <div>
          <button className="bg-orange-500 text-white py-2 px-4 rounded m-2">Donate</button>
          <button className="bg-orange-500 text-white py-2 px-4 rounded m-2">Join Us</button>
        </div>
      </div>
      <div className=''>
        <img src={heroImage} alt="hero" className=""></img>
      </div>
    </section>
  );
};

export default HeroSection;
