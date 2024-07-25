import { useEffect, useState } from 'react';
import { IoGlobeOutline } from "react-icons/io5";
import { RiHandHeartFill } from "react-icons/ri";
import { PiHandshakeFill } from "react-icons/pi";

const Impact = () => {
  const [peopleSupported, setPeopleSupported] = useState(0);
  const [individualsServed, setIndividualsServed] = useState(0);
  const [womenTrained, setWomenTrained] = useState(0);

  useEffect(() => {
    // Simulate an API call or calculation
    const interval = setInterval(() => {
      setPeopleSupported((prev) => Math.min(prev + 100, 2000));
      setIndividualsServed((prev) => Math.min(prev + 50, 1100));
      setWomenTrained((prev) => Math.min(prev + 100, 2000));
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-[60%] m-auto flex justify-around py-8">
      <div className="text-center bg-gray-300 rounded-xl p-5 flex flex-col items-center">
        <div className='text-5xl flex justify-center'><IoGlobeOutline /></div>
        <div className="text-3xl">Supporting</div>
        <div className="text-4xl font-bold">+{peopleSupported}</div>
        <div className='w-60'>People All Around the World</div>
      </div>
      <div className="text-center bg-gray-300 rounded-xl p-5 flex flex-col items-center">
        <div className='text-5xl flex justify-center'><RiHandHeartFill /></div>
        <div className="text-3xl font-bold">Over</div>
        <div className="text-4xl font-bold">+{individualsServed}</div>
        <div className='w-60'>Individuals served through our health clinics</div>
      </div>
      <div className="text-center bg-gray-300 rounded-xl p-5 flex flex-col items-center">
        <div className='text-5xl flex justify-center'><PiHandshakeFill /></div>
        <div className="text-3xl font-bold">Over</div>
        <div className="text-4xl font-bold">+{womenTrained}</div>
        <div className='w-60'>Women trained and employed</div>
      </div>
    </div>
  );
};

export default Impact;
