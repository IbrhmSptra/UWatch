import { IoCloseCircleOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { toggleModal } from "../redux/slicer/webContent";
import { useEffect } from "react";
import { auth } from "../Services/Firebase/firebase.service";
import { useNavigate } from "react-router-dom";

const Modal = () => {
  const isShowModal = useSelector((state) => state.webContent.isShowModal);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //fungsi logout
  const Logout = () => {
    auth.signOut();
    localStorage.removeItem("user");

    dispatch(toggleModal());
    navigate("/");
  };

  //prevent scrolling
  useEffect(() => {
    if (isShowModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
    return () => {
      document.body.style.overflow = "visible";
    };
  }, [isShowModal]);
  return (
    <div
      className={`fixed w-screen h-screen top-0 left-0 bg-opacity-50 backdrop-blur-sm flex items-center justify-center transition-all duration-300 ${
        isShowModal ? "visible opacity-100" : "invisible opacity-0"
      }`}
    >
      <div className="bg-card rounded-xl w-1/2 text-white p-4 space-y-4 md:p-0 md:px-8 md:py-4 md:space-y-12">
        <div className="space-y-4">
          <div className="flex justify-between">
            <h1 className="text-xl font-semibold">Logout</h1>
            <div
              className="cursor-pointer"
              onClick={() => {
                dispatch(toggleModal());
              }}
            >
              <IoCloseCircleOutline className="text-2xl text-tertiary " />
            </div>
          </div>

          <p className="font-light">Are you sure want to logout?</p>
        </div>
        <button
          className="bg-secondary py-2 px-4 w-full rounded-full"
          onClick={Logout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Modal;
