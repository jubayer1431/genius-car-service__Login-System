import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import React, { useState } from "react";
import { firebaseAuth } from "../../firebase.init";
import Loading from "../../shared/Loading/Loading";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

const ResetForm = () => {
  const [email, setEmail] = useState("");
  const [sendPasswordResetEmail, sending] =
    useSendPasswordResetEmail(firebaseAuth);

  if (sending) {
    return <Loading />;
  }
  return (
    <div className="container w-50 mx-auto">
      <Form
        onSubmit={async () => {
          await sendPasswordResetEmail(email);
          alert("Sent email");
        }}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Button variant="primary w-100 mx-auto d-block mb-2" type={"submit"}>
          Reset password
        </Button>
      </Form>
    </div>
  );
};

export default ResetForm;
