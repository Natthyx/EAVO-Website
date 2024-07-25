import Program from "./Programs";
import womentrain from "../assets/women.png";
import children from "../assets/children.png";
import doctor from "../assets/doctor.png";

const OurMission = () => {
  return (
    <section id="mission" className="p-8 m-3 w-[93%] mx-auto">
      <h1 className="text-4xl font-bold text-center">Our Mission</h1>
      <p className="text-center mt-2 px-4">
        The Empowering African Voices Organization (EAVO) is dedicated to
        supporting African women and children by advocating for their rights.
        providing essential support services. and empowering communities. Our
        goals include advocating for policy changes. offering educational and
        healthcare programs. and fostering economic empowerment and social
        cohesion. At EAVO. we value empathy. integrity. equality. collaboration.
        and resilience. guiding our support for African women and children. We
        engage communities. build capacity. advocate for policy changes. provide
        essential services. innovate solutions. and continuously improve our
        impact,
      </p>
      <div id="programs">
        <h1 className="text-4xl font-bold text-center mt-8 py-4">
          Our Programs
        </h1>
        <div className="flex justify-around py-8">
          <Program
            title="Women's Vocational Training"
            description="This program focuses on providing women with the skills..."
            imageUrl={womentrain}
            linkUrl="www.women.com"
          />
          <Program
            title="Child Education Support"
            description="Our education support program ensures that children..."
            imageUrl={children}
            linkUrl="www.women.com"
          />
          <Program
            title="Healthcare Initiatives"
            description="We run health clinics and provide essential medical care..."
            imageUrl={doctor}
            linkUrl="www.women.com"
          />
        </div>
      </div>
    </section>
  );
};

export default OurMission;
