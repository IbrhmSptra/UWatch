import { useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";

const Middleware = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  if (!user) {
    return <Navigate to="/authpage" />;
  }
  return children;
};

export default Middleware;
