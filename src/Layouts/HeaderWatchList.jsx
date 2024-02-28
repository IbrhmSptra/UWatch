import ButtonLogout from "../Components/ButtonLogout";
import Profile from "../Components/Profile";

const HeaderWatchList = () => {
  return (
    <div className="flex justify-between md:mt-10">
      <Profile />
      <ButtonLogout addClass="block md:hidden" />
    </div>
  );
};

export default HeaderWatchList;
