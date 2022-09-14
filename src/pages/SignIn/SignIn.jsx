import React, { useRef } from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useLocation, useNavigate } from "react-router-dom";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { firebaseAuth } from "../../firebase.init";
import SocialSignIn from "./SocialSignIn/SocialSignIn";
import Loading from "../../shared/Loading/Loading";
const SignIn = () => {
  const [signInWithEmailAndPassword, user, loading] =
    useSignInWithEmailAndPassword(firebaseAuth);

  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const navigate = useNavigate();
  const emailRef = useRef("");
  const passwordRef = useRef("");

  if (loading) {
    return <Loading />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    await signInWithEmailAndPassword(email, password);
  };

  if (user) {
    navigate(from, { replace: true });
  }

  return (
    <div className={"container w-50 mx-auto"}>
      <h2>Please Sign In</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="Enter email"
            required
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>

        <Button variant="primary w-100 mx-auto d-block mb-2" type="submit">
          Sign In
        </Button>
      </Form>
      <p>
        New to Genius Car ?{" "}
        <span
          style={{ cursor: "pointer" }}
          className={"text-primary text-decoration-none"}
          onClick={() => navigate("/sign-up")}
        >
          please, sign up
        </span>
      </p>
      <p>
        Forgot Password ?{" "}
        <span
          style={{ cursor: "pointer" }}
          className={"text-primary text-decoration-none"}
          onClick={() => navigate("/reset")}
        >
          reset password
        </span>
      </p>
      <SocialSignIn />
    </div>
  );
};

export default SignIn;
