import { CiSaveDown1 } from "react-icons/ci";

const GetStarted = () => {
  return (
    <a href="#auth">
      <div className="flex flex-col items-center gap-2">
        <CiSaveDown1 className="text-white text-6xl animate-bounce" />
        <p className="text-white animate-pulse">Get&apos;s Started</p>
      </div>
    </a>
  );
};

export default GetStarted;
