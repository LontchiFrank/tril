import React from "react";
import CardAdvert from "./CardAdvert";
import Cardseller from "./Cardseller";
import pod from "../img/1.png";
function Secondview() {
  const items = [
    {
      border: " 2px solid #ffb800",
      icon: "far fa-user",
      round: "2px solid #28B9A7",
      color: "#ffb800",
      msg: "1. Tap the Sellers button to see the list of advertisers in the application",
    },
    {
      border: "2px solid #28B9A7",
      icon: "far fa-money-bill-alt",
      round: "2px solid #ffb800",
      color: "#28B9A7",
      msg: "2. Check his profile to see if approves your taste or has alot of review",
    },
    {
      border: "2px solid #ffb800",
      icon: "far fa-lightbulb",
      round: "2px solid #28B9A7",
      color: "#ffb800",
      msg: "3. Contact the advertisers on whatsapp and discuss obout the deal",
    },
    {
      border: "2px solid #28B9A7",
      icon: "far fa-money-bill-alt",
      round: "2px solid #ffb800",
      color: "#28B9A7",
      msg: "4. Payment are not done in the application but out of the app",
    },
  ];
  const list = items.map((item) => <Cardseller item={item} />);
  const items1 = [
    {
      border: " 2px solid #ffb800",
      icon: "fas fa-users",
      round: "3px solid rgba(143, 143, 143, 0.87)",
      color: "#28B9A7",
      msg: "1. Tap the advertiser's button to input your information for the seller to see your qualification ",
    },
    {
      border: "2px solid #28B9A7",
      icon: "fas fa-star",
      round: "3px solid rgba(143, 143, 143, 0.87)",
      color: "#ffb800",
      msg: "2. Input the maximum whatsapp views you get a day and the total number of contact",
    },
    {
      border: "2px solid #28B9A7",
      icon: "far fa-eye",
      round: "3px solid rgba(143, 143, 143, 0.87)",
      color: "#ffb800",
      msg: "3. Comfortably wait and get a message from an interested seller to discuss about the deal",
    },
  ];
  const lists = items1.map((items) => <CardAdvert items={items} />);
  return (
    <div id="how it works" className="container-fluid secondview m-0 p-0">
      <div className="remote col-sm-12 col-md-4 col-lg-3">
        <div className="row title-row d-flex justify-content-center align-items-center m-0">
          <div className="hold-title">
            <h3 className="sub">How it works</h3>
          </div>
        </div>
        <div className="content-row ">
          <div className="sellers col-sm-12 col-md-4 col-lg-3 p-0">
            <div className="sell flex-column d-flex justify-content-left">
              <h4 className="sub1">For Sellers</h4>
              <div className="mat"></div>
            </div>
            <div className="sell-content  ">
              <div className=" sell-con row">{list}</div>
            </div>
          </div>
          <div className="sellers col-sm-12 col-md-4 col-lg-3 p-0">
            <div className="sell flex-column d-flex justify-content-left">
              {/* <div className="hold-seller d-flex justify-content-left flex-column"> */}
              <h4 className="sub1">For Advertisers</h4>
              {/* <div className="stand  d-flex justify-content-center "> */}
              <div className="mat"></div>
              {/* </div> */}
              {/* </div> */}
            </div>
            <div className="sell-content col-sm-12 ">
              <div className=" sell-con">
                <div className="row">
                  {lists}
                  <img
                    alt=""
                    src={pod}
                    className="sell-img col-12 col-sm-6 col-md-6 col-lg-3 p-3 p-sm-3 p-md-3 p-lg-3 p-xl-4"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Secondview;
