import React, { useEffect, useState } from "react";
import ServiceItem from "../ServiceItem/ServiceItem";
import "./_Services.scss";

const Services = () => {
  const [servicesData, setServicesData] = useState([]);

  useEffect(() => {
    const fetchServicesData = async () => {
      const response = await fetch("services.json");
      const data = await response.json();
      setServicesData(data);
    };
    fetchServicesData();
  }, []);

  return (
    <div id={"services"} className={"container"}>
      <h1 className={"services--title"}>Our Services</h1>
      <div className={"services__container"}>
        {servicesData.map((service) => (
          <ServiceItem key={service.id} service={service} />
        ))}
      </div>
      <br />
      <br />
    </div>
  );
};

export default Services;
