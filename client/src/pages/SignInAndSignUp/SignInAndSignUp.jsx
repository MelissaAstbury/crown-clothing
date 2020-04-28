import React from "react";

import SignIn from "../../components/SignIn/sign-in";
import SignUp from "../../components/SignUp/sign-up";

import { SignInAndSignUpContainer } from "./SignInAndSignUpContainer";

const SignInAndSignUpPage = () => (
  <SignInAndSignUpContainer>
    <SignIn />
    <SignUp />
  </SignInAndSignUpContainer>
);

export default SignInAndSignUpPage;
