import React from "react";
import Testcard from "./Testcard";
import girl from "../img/12.jpg";
import boy from "../img/13.jpg";
import student from "../img/5.jpg";
function Fourthview() {
  const testis = [
    {
      photo: girl,
      txt: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donecullamcorper nisl eget justo iaculis euismod",
      fname: "Diana Wallas",
    },
    {
      photo: boy,
      txt: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper nisl eget justo iaculis euismod",
      fname: "Fiona Simley",
    },
    {
      photo: student,
      txt: "  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper nisl eget justo iaculis euismod",
      fname: "Marcus Shaquille",
    },
  ];
  const testimony = testis.map((test) => <Testcard test={test} />);
  return (
    <div id="testimonies" className="fourthview">
      <div className="sell flex-column d-flex justify-content-center align-items-center pt-5 px-0">
        <h4 className="sub1">Testimonies</h4>
        <div className="mat"></div>
      </div>
      <div className="rate-content px-3 ">
        <div className=" rate-con row d-flex justify-content-around py-2">
          {" "}
          {testimony}{" "}
        </div>
      </div>
    </div>
  );
}

export default Fourthview;
