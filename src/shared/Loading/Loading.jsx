import React from "react";
import { Spinner } from "react-bootstrap";

const Loading = () => {
  return (
    <div
      className={
        "d-flex justify-content-center align-items-center vh-100 vw-100"
      }
    >
      <Spinner
        style={{ height: "100px", width: "100px" }}
        animation="border"
        variant="primary"
      />
    </div>
  );
};

export default Loading;
