import { useDispatch } from "react-redux";
import { nextPage, prevPage } from "../redux/slicer/webContent";

const Pagination = ({ isEndPage, isFirstPage }) => {
  const dispatch = useDispatch();
  return (
    <div className="bg-card h-10 text-white rounded-full overflow-hidden flex">
      <div
        className={`py-2 px-8 select-none ${
          isFirstPage
            ? "text-grayText"
            : "hover:bg-secondary hover:text-black cursor-pointer"
        }`}
        onClick={() => {
          dispatch(prevPage());
        }}
      >
        <h1 className="text-xl">Prev</h1>
      </div>
      <div className="w-0.5 h-full bg-tertiary "></div>
      <div
        className={`py-2 px-8 select-none ${
          isEndPage
            ? "text-grayText"
            : "hover:bg-secondary hover:text-black cursor-pointer"
        }`}
        onClick={() => {
          dispatch(nextPage());
        }}
      >
        <h1 className="text-xl">Next</h1>
      </div>
    </div>
  );
};

export default Pagination;
