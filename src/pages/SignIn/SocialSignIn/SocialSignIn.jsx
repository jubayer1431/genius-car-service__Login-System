import React from "react";
import { ReactComponent as Google } from "./../../../images/icon/google.svg";
import { ReactComponent as Facebook } from "./../../../images/icon/facebook.svg";
import { ReactComponent as Github } from "./../../../images/icon/github.svg";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { firebaseAuth } from "../../../firebase.init";
import { useLocation, useNavigate } from "react-router-dom";
import Loading from "../../../shared/Loading/Loading";

const SocialSignIn = () => {
  const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] =
    useSignInWithGoogle(firebaseAuth);
  const [signInWithGithub, userGithub, loadingGithub, errorGithub] =
    useSignInWithGithub(firebaseAuth);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  let errorElement = <p>&nbsp;</p>;

  if (loadingGithub || loadingGoogle) {
    return <Loading />;
  }

  if (userGoogle || userGithub) {
    navigate(from, { replace: true });
  }

  if (errorGoogle || errorGithub) {
    errorElement = (
      <p className={"text-danger"}>
        {errorGoogle.message}
        {errorGithub}
      </p>
    );
  }

  return (
    <div>
      <div className="d-flex justify-content-center align-items-center">
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
        <p className={"mt-3 mx-2"}>or</p>
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
      </div>
      {errorElement}
      <div className="d-flex justify-content-center align-items-center gap-4">
        <button
          className="btn btn-outline-primary w-50 mx-auto"
          onClick={async () => {
            await signInWithGoogle();
          }}
        >
          <Google />
          <span className={"px-2"}>Sign In with Google</span>
        </button>
        <button className="btn btn-outline-primary w-50  mx-auto">
          <Facebook />
          <span className={"px-2"}>Sign In with Facebook</span>
        </button>
        <button
          className="btn btn-outline-primary w-50  mx-auto"
          onClick={async () => {
            await signInWithGithub();
          }}
        >
          <Github />
          <span className={"px-2"}>Sign In with Github</span>
        </button>
      </div>
    </div>
  );
};

export default SocialSignIn;
