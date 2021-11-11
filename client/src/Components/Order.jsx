import React from "react";
import { lists, list } from "./Secondview";
import CardAdvert from "./CardAdvert";
import Cardseller from "./Cardseller";
function Order() {
  const items = [
    {
      border: " 2px solid #ffb800",
      icon: "far fa-user",
      round: "2px solid #28B9A7",
      color: "#ffb800",
    },
    {
      border: "2px solid #28B9A7",
      icon: "far fa-money-bill-alt",
      round: "2px solid #ffb800",
      color: "#28B9A7",
    },
    {
      border: "2px solid #ffb800",
      icon: "far fa-lightbulb",
      round: "2px solid #28B9A7",
      color: "#ffb800",
    },
    {
      border: "2px solid #28B9A7",
      icon: "far fa-money-bill-alt",
      round: "2px solid #ffb800",
      color: "#28B9A7",
    },
  ];
  const list = items.map((item) => <Cardseller item={item} />);
  const items1 = [
    {
      border: " 2px solid #28B9A7",
      icon: "fas fa-users",
      round: "2px solid #ffb800",
      color: "#28B9A7",
    },
    {
      border: "2px solid #ffb800",
      icon: "fas fa-star",
      round: "2px solid #28B9A7",
      color: "#ffb800",
    },
    {
      border: "2px solid #28B9A7",
      icon: "far fa-eye",
      round: "2px solid #ffb800",
      color: "#28B9A7",
    },
  ];
  const lists = items1.map((items) => <CardAdvert items={items} />);
  return (
    <div className="main-row m-0">
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          backgroundColor: "red",
          height: "100%",
          width: "100%",
        }}
      >
        {list}
        {lists}
      </div>
    </div>
  );
}

export default Order;
