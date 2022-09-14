import React from "react";
import expert1 from "./../../../images/experts/expert-1.jpg";
import expert2 from "./../../../images/experts/expert-2.jpg";
import expert3 from "./../../../images/experts/expert-3.jpg";
import expert4 from "./../../../images/experts/expert-4.jpg";
import expert5 from "./../../../images/experts/expert-5.jpg";
import expert6 from "./../../../images/experts/expert-6.png";
import ExpertItem from "../ExpertItem/ExpertItem";

const Experts = () => {
  const experts = [
    { id: 1, name: "John Cena", img: expert1 },
    { id: 2, name: "Brock Lesnar", img: expert2 },
    { id: 3, name: "The Undertaker", img: expert3 },
    { id: 4, name: "Randy Orton", img: expert4 },
    { id: 5, name: "Goldburg", img: expert5 },
    { id: 6, name: "Braun Strawman", img: expert6 },
  ];

  return (
    <div id={"experts"} className={"container"}>
      <h2 className={"text-primary text-center"}>Our Experts</h2>
      <div className="row">
        {experts.map((expert) => (
          <ExpertItem key={expert.id} expert={expert} />
        ))}
      </div>
    </div>
  );
};

export default Experts;
