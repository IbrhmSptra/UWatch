import { RiLogoutBoxRLine } from "react-icons/ri";
import Modal from "./Modal";
import { useDispatch } from "react-redux";
import { toggleModal } from "../redux/slicer/webContent";

const ButtonLogout = ({ addClass }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div
        className={`p-2 bg-secondary rounded-full flex justify-center h-fit cursor-pointer ${addClass}`}
        onClick={() => {
          dispatch(toggleModal());
        }}
      >
        <RiLogoutBoxRLine />
      </div>
      <Modal />
    </>
  );
};

export default ButtonLogout;
