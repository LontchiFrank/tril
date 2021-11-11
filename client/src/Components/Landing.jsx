import React from "react";
import Firstview from "./Firstview";
import Footer from "./Footer";
import Fourthview from "./Fourthview";
import Secondview from "./Secondview";
import Thirdview from "./Thirdview";

function Landing() {
  return (
    <div className="container-fluid main-container p-0 m-0">
      <Firstview />
      <Secondview />
      <Thirdview />
      <Fourthview/>
      <Footer/>
    </div>
  );
}

export default Landing;
