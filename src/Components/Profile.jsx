import { FaUserCircle } from "react-icons/fa";

const Profile = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const username = user.displayName;

  return (
    <div className="flex items-center gap-x-4">
      <FaUserCircle className="text-white md:text-4xl text-3xl" />
      <h1 className="text-white text-base md:text-xl">{username}</h1>
    </div>
  );
};

export default Profile;
