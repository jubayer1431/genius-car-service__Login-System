import React from "react";
import "./_ServiceItem.scss";
import { useNavigate } from "react-router-dom";

const ServiceItem = ({ service: { id, name, img, description, price } }) => {
  const navigate = useNavigate();

  return (
    <div className={"service"}>
      <img src={img} alt="" />
      <p>{name}</p>
      <p>{description}</p>
      <p>{price}</p>
      <button
        className={"btn btn-primary"}
        onClick={() => navigate(`/services/${id}`)}
      >
        Book: {name}
      </button>
    </div>
  );
};

export default ServiceItem;
