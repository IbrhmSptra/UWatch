import { useDispatch, useSelector } from "react-redux";
import ButtonAuth from "../Components/ButtonAuth";
import Input from "../Components/Input";
import Logo from "../Components/Logo";
import NavigateAuth from "../Components/NavigateAuth";
import { setError } from "../redux/slicer/authNavigateSlice";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const errorMsg = useSelector((state) => state.authNavigate.errorAuth);

  return (
    <form
      className="flex flex-col h-full justify-around w-full"
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(setError(""));
      }}
    >
      <Logo addClass="text-4xl text-center sm:hidden" />
      <div className="space-y-4 mb-10 xl:space-y-6">
        <Input label="Username" type="text" placeholder="Enter Your Username" />
        <Input label="Email" type="email" placeholder="Enter Your Email" />
        <Input
          label="Password"
          type="password"
          placeholder="Enter Your Password"
        />
        <Input
          label="Confirm Password"
          type="password"
          placeholder="Re-Enter Your Password"
        />
        {errorMsg && <p className="text-red-500 text-center">{errorMsg}</p>}
      </div>
      <div className="space-y-4">
        <ButtonAuth label="SIGN UP" />
        <NavigateAuth addClass="sm:hidden" />
      </div>
    </form>
  );
};

export default RegisterForm;
