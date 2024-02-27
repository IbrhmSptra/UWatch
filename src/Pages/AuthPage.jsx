import { useSelector } from "react-redux";
import LoginForm from "../Layouts/LoginForm";
import WelcomeLayout from "../Layouts/WelcomeLayout";
import background from "../assets/img/noise.png";
import RegisterForm from "../Layouts/RegisterForm";
import BannerAuth from "../Layouts/BannerAuth";
const AuthPage = () => {
  const isLogin = useSelector((state) => state.authNavigate.pageLogin);

  return (
    <div
      className="font-lgSpartan bg-black bg-contain"
      style={{ backgroundImage: `url(${background})` }}
    >
      <WelcomeLayout />
      <section
        name="auth"
        id="auth"
        className=" h-screen py-10 px-4 sm:px-8 md:px-12 xl:px-40  "
      >
        <div className="h-full block sm:hidden">
          {isLogin ? <LoginForm /> : <RegisterForm />}
        </div>

        <div className="h-full w-full hidden gap-x-2 sm:flex border-4 border-tertiary relative rounded-xl overflow-hidden">
          <div className="w-full px-4 md:px-8 lg:px-14">
            <LoginForm />
          </div>
          <div className="w-full px-4 md:px-10 lg:px-14">
            <RegisterForm />
          </div>
          <BannerAuth />
        </div>
      </section>
    </div>
  );
};

export default AuthPage;
