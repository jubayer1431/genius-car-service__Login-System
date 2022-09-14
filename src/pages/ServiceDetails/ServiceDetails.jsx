import React from "react";
import {Link, useParams} from "react-router-dom";

const ServiceDetails = () => {
  const { serviceId } = useParams();

  return <div>
    <h2>{serviceId}</h2>
<Link to={'/checkout'}>
  <button className="btn btn-primary">Proceed to checkout</button></Link>
  </div>;
};

export default ServiceDetails;
