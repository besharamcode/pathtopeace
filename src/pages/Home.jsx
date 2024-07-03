import Hero from "../components/UI/Hero";
import WhatIsPathToPeace from "../components/UI/WhatIsPathToPeace";
import WhatYouWillLearn from "../components/UI/WhatYouWillLearn";
import Instructor from "../components/UI/Instructor";
import JoinCourse from "../components/UI/JoinCourse";

const Home = () => {
  return (
    <>
      <div className="mb-28">
        <Hero />
        <WhatIsPathToPeace />
        <WhatYouWillLearn />
        <Instructor />
        <JoinCourse />
      </div>
    </>
  );
};

export default Home;
