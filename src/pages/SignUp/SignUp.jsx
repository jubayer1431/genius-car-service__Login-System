import React, { useRef, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { firebaseAuth } from "../../firebase.init";
import SocialSignIn from "../SignIn/SocialSignIn/SocialSignIn";
import Loading from "../../shared/Loading/Loading";

const SignUp = () => {
  const [createUserWithEmailAndPassword, user, loading] =
    useCreateUserWithEmailAndPassword(firebaseAuth, {
      sendEmailVerification: true,
    });

  const [updateProfile, updating] = useUpdateProfile(firebaseAuth);

  const [terms, setTerms] = useState(false);

  const nameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();

  if (loading || updating) {
    return <Loading />;
  }

  const handleCheck = (e) => {
    setTerms(!terms);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const displayName = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName });
  };

  if (user) {
    navigate("/");
  }

  return (
    <div className={"container w-50 mx-auto"}>
      <h2>Please Sign Up</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Full name</Form.Label>
          <Form.Control
            ref={nameRef}
            type="text"
            placeholder="Enter name"
            required
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
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
        </Form.Group>{" "}
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="Accept Terms and Conditions"
            onClick={handleCheck}
          />
        </Form.Group>
        <Button
          variant="primary w-100 mx-auto d-block mb-2"
          type="submit"
          disabled={!terms}
        >
          Sign Up
        </Button>
      </Form>
      <p>
        Already Have an Account ?{" "}
        <span
          style={{ cursor: "pointer" }}
          className={"text-danger text-decoration-none"}
          onClick={() => navigate("/sign-in")}
        >
          please, sign in
        </span>
      </p>
      <SocialSignIn />{" "}
    </div>
  );
};

export default SignUp;
