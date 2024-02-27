import { useDispatch, useSelector } from "react-redux";
import ButtonAuth from "../Components/ButtonAuth";
import Input from "../Components/Input";
import Logo from "../Components/Logo";
import NavigateAuth from "../Components/NavigateAuth";
import { setError } from "../redux/slicer/authNavigateSlice";
const LoginForm = () => {
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
      <div className="space-y-8 mb-10">
        <Input label="Email" type="email" placeholder="Enter Your Email" />
        <Input
          label="Password"
          type="password"
          placeholder="Enter Your Password"
        />
        {errorMsg && <p className="text-red-500 text-center">{errorMsg}</p>}
      </div>
      <div className="space-y-10">
        <ButtonAuth label="SIGN IN" />
        <NavigateAuth addClass="sm:hidden" />
      </div>
    </form>
  );
};

export default LoginForm;
