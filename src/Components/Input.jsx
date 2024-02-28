import { useDispatch } from "react-redux";
import { setError } from "../redux/slicer/authNavigateSlice";

const Input = ({ type, label, placeholder, onchange }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <h3 className={`text-white font-bold lg:text-xl`}>{label}</h3>

      <input
        className={`w-full text-xs py-2 px-4 rounded-lg border-tertiary text-white border-2 bg-card mt-1 lg:text-lg `}
        type={type}
        placeholder={placeholder}
        onChange={onchange}
        required
        onFocus={() => {
          dispatch(setError(""));
        }}
      />
    </div>
  );
};

export default Input;
