import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const Middleware = ({ children }) => {
  const user = useSelector((state) => state.authNavigate.user);
  //   const dispatch = useDispatch();
  //   useEffect(() => {
  //     onAuthStateChanged(auth, (userAuth) => {
  //       if (userAuth) {
  //         // user is logged in, send the user's details to redux, store the current user in the state
  //         dispatch(
  //           login({
  //             email: userAuth.email,
  //             uid: userAuth.uid,
  //             displayName: userAuth.displayName,
  //             photoUrl: userAuth.photoURL,
  //           })
  //         );
  //       } else {
  //         dispatch(logout());
  //       }
  //     });
  //   });
  if (!user) {
    return <Navigate to="/" />;
  }
  return children;
};

export default Middleware;
