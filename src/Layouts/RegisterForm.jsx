import { useDispatch, useSelector } from "react-redux";
import ButtonAuth from "../Components/ButtonAuth";
import Input from "../Components/Input";
import Logo from "../Components/Logo";
import NavigateAuth from "../Components/NavigateAuth";
import { setError } from "../redux/slicer/authNavigateSlice";
import { useState } from "react";
import {
  auth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "../Services/Firebase/firebase.service";
import errorJson from "../Services/Firebase/authError.json";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const errorMsg = useSelector((state) => state.authNavigate.errorAuth);

  //Get Value Input
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  //Fungsi Register
  const Register = (e) => {
    e.preventDefault();
    if (password != rePassword) {
      dispatch(setError("Password and Confirm password do not match"));
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        updateProfile(userCredentials.user, {
          displayName: username,
        });
        dispatch(setError(""));
        setTimeout(() => {
          toast.success("Your account has been successfully created", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "colored",
          });
        }, 10);
        navigate("/");
      })
      .catch((error) => {
        dispatch(setError(errorJson[error.code]));
      });
  };

  return (
    <>
      <form
        className="flex flex-col h-full justify-around w-full"
        onSubmit={Register}
      >
        <Logo addClass="text-4xl text-center sm:hidden" />
        <div className="space-y-4 mb-10 xl:space-y-6">
          <Input
            label="Username"
            type="text"
            placeholder="Enter Your Username"
            onchange={(e) => setUsername(e.target.value)}
          />
          <Input
            label="Email"
            type="email"
            placeholder="Enter Your Email"
            onchange={(e) => setEmail(e.target.value)}
          />
          <Input
            label="Password"
            type="password"
            placeholder="Enter Your Password"
            onchange={(e) => setPassword(e.target.value)}
          />
          <Input
            label="Confirm Password"
            type="password"
            placeholder="Re-Enter Your Password"
            onchange={(e) => setRePassword(e.target.value)}
          />
          {errorMsg && <p className="text-red-500 text-center">{errorMsg}</p>}
        </div>
        <div className="space-y-4">
          <ButtonAuth label="SIGN UP" />
          <NavigateAuth addClass="sm:hidden" />
        </div>
      </form>
    </>
  );
};

export default RegisterForm;
