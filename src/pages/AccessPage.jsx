import { useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import SignInForm from "../components/form/SignInForm";
import SignUpForm from "../components/form/SignUpForm";
import ForgotPassForm from "../components/form/ForgotPassForm";
import Card from "../components/UI/Card";
import knollingImage from "../assets/u0hlhegr.png";
import { FBAuthContext } from "../firebase/FBAuthProvider";

const AccessPage = () => {
  const location = useLocation();
  const [showSignInForm, setShowSignInForm] = useState(
    location?.state?.showSignInForm || false
  );
  const [showForgotPassForm, setShowForgotPassForm] = useState(false);

  const { setError } = useContext(FBAuthContext);

  const toggleSignInForm = () => {
    setError(null);
    setShowSignInForm((prevState) => !prevState);
  };

  const openForgotPassForm = () => {
    setError(null);
    setShowForgotPassForm((prevState) => !prevState);
  };

  return (
    <div className="flex h-screen overflow-hidden bg-gradient-to-l from-primary to-secondary relative">
      <div className="flex justify-center items-center flex-1">
        <div className="w-full lg:w-2/3 lg:flex">
          <div className="w-full xl:w-1/2 flex justify-center mb-4 lg:h-full">
            <div className="rounded-lg overflow-hidden max-w-[40rem] w-full object-cover lg:mr-4 sm:mr-0 lg:min-h-[35rem] h-40 lg:rounded-full text-center drop-shadow-xl">
              <h1 className="font-bold lg:text-xl text-2xl mb-2 text-white tracking-wide mt-2">
                Omni Market
              </h1>
              <img
                src={knollingImage}
                alt="Shop knolling image"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <Card className="bg-white w-full min-w-[25rem] max-w-[40rem] lg:ml-16">
              {showForgotPassForm ? (
                <ForgotPassForm openForgotForm={openForgotPassForm} />
              ) : showSignInForm ? (
                <SignInForm
                  switchForm={toggleSignInForm}
                  openForgotForm={openForgotPassForm}
                  redirect={location?.state?.productId}
                />
              ) : (
                <SignUpForm switchForm={toggleSignInForm} />
              )}
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccessPage;
