import { useState } from "react";

import SignInForm from "../components/form/SignInForm";
import SignUpForm from "../components/form/SignUpForm";
import ForgotPassForm from "../components/form/ForgotPassForm";
import Card from "../components/UI/Card";

const AccessPage = () => {
  const [showSignInForm, setShowSignInForm] = useState(false);
  const [showForgotPassForm, setShowForgotPassForm] = useState(false);

  const toggleSignInForm = () => {
    setShowSignInForm((prevState) => !prevState);
  };

  const openForgotPassForm = () => {
    setShowForgotPassForm((prevState) => !prevState);
  };

  return (
    <div className="flex h-screen">
      <div className="flex justify-center items-center flex-1">
        <div className="w-1/3"></div>
        <div className="w-1/3"></div>
        <div className="w-full h-full flex justify-center items-center">
          <Card className="bg-white w-1/2">
            {showForgotPassForm ? (
              <ForgotPassForm openForgotForm={openForgotPassForm} />
            ) : showSignInForm ? (
              <SignInForm
                switchForm={toggleSignInForm}
                openForgotForm={openForgotPassForm}
              />
            ) : (
              <SignUpForm switchForm={toggleSignInForm} />
            )}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AccessPage;
