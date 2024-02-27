import Logo from "../Components/Logo";
import Tagline from "../Components/Tagline";
import GetStarted from "../Components/GetStarted";

const WelcomeLayout = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-between py-10 ">
      <Logo addClass="text-2xl xl:text-4xl" />
      <div className="text-center max-w-72 lg:max-w-96">
        <Tagline size="text-4xl lg:text-6xl" />
      </div>
      <div>
        <GetStarted />
      </div>
    </div>
  );
};

export default WelcomeLayout;
