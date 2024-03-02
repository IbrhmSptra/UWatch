import { useDispatch, useSelector } from "react-redux";
import ButtonAuth from "../Components/ButtonAuth";
import Input from "../Components/Input";
import Logo from "../Components/Logo";
import NavigateAuth from "../Components/NavigateAuth";
import { setError } from "../redux/slicer/authNavigateSlice";
import {
  auth,
  signInWithEmailAndPassword,
} from "../Services/Firebase/firebase.service";
import { useState } from "react";
import errorJson from "../Services/Firebase/authError.json";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const dispatch = useDispatch();
  const errorMsg = useSelector((state) => state.authNavigate.errorAuth);
  const navigate = useNavigate();

  //Get Value From Input
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //function Login
  const Login = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = {
        email: userCredential.user.email,
        uid: userCredential.user.uid,
        displayName: userCredential.user.displayName,
      };
      //set credentials to local
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/home");
    } catch (error) {
      dispatch(setError(errorJson[error.code]));
    }
  };

  return (
    <form
      className="flex flex-col h-full justify-around w-full"
      onSubmit={Login}
    >
      <Logo addClass="text-4xl text-center sm:hidden" />
      <div className="space-y-8 mb-10">
        <Input
          label="Email"
          type="email"
          placeholder="Enter Your Email"
          onchange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <Input
          label="Password"
          type="password"
          placeholder="Enter Your Password"
          onchange={(e) => {
            setPassword(e.target.value);
          }}
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
