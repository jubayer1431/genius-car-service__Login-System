import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { firebaseAuth } from "../../firebase.init";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../../shared/Loading/Loading";

const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(firebaseAuth);
  const location = useLocation();

  if (loading) {
    return <Loading />;
  }

  if (!user) {
    return <Navigate to={"/sign-in"} state={{ from: location }} replace />;
  }

  return children;
};

export default RequireAuth;
