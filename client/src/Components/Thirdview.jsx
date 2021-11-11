import React from "react";
import CardRate from "./CardRate";
import pics from "../img/9.png";
import pic1 from "../img/10.png";
import pic2 from "../img/11.png";
import ape from "../img/Ape.jpg";
import king from "../img/8.png";
import fam from "../img/woman.jpg";
import Parse from "parse";

Parse.initialize("myAppId");
Parse.serverURL = "http://localhost:1337/parse";

function Thirdview() {
  let TopAds = Parse.Object.extend("TopAds");
  let topAdvert = new TopAds();
  // Alice Ndeh
  topAdvert.set("userName", "Alice Ndeh");
  topAdvert.set("locate", "Molyko, Buea");
  topAdvert.set("contact", "526");
  topAdvert.set("view", "430");
  topAdvert.set(
    "Advertpic",
    "https://images.pexels.com/photos/7683693/pexels-photo-7683693.jpeg?cs=srgb&dl=pexels-rodnae-productions-7683693.jpg&fm=jpg"
  );
  topAdvert.save();

  // TopAds = Parse.Object.extend("TopAds");
  // // Jack Thompson
  topAdvert.set("userName", "Jack Thompson");
  topAdvert.set("locate", "Limbe");
  topAdvert.set("contact", "336");
  topAdvert.set("view", "110");
  topAdvert.set(
    "Advertpic",
    "https://images.pexels.com/photos/7683693/pexels-photo-7683693.jpeg?cs=srgb&dl=pexels-rodnae-productions-7683693.jpg&fm=jpg"
  );
  topAdvert.save();

  // TopAds = Parse.Object.extend("TopAds");
  //Mack Steve
  topAdvert.set("userName", "Mack Steve");
  topAdvert.set("locate", "Limbe");
  topAdvert.set("contact", "708");
  topAdvert.set("view", "692");
  topAdvert.set(
    "Advertpic",
    "https://images.pexels.com/photos/7683693/pexels-photo-7683693.jpeg?cs=srgb&dl=pexels-rodnae-productions-7683693.jpg&fm=jpg"
  );
  topAdvert.save();
  // const getUsername = topAdvert.get("userName");
  // const use = gameScore.get("score");
  // const playerName = gameScore.get("playerName");
  // const cheatMode = gameScore.get("cheatMode");
  const tops = [
    {
      icon: "far fa-user",
      round: "2px solid #8F8F8F",
      pic: ape,
      ima: pics,
      setName: topAdvert.set("userName", "Alice Ndeh"),
      getName: topAdvert.get("userName"),
      location: topAdvert.set("locate", "Molyko, Buea"),
      getLocate: topAdvert.get("locate"),
      iconlocate: "fas fa-map-marker-alt",
      iconeye: "far fa-eye",
      number: topAdvert.set("phone_number", "675979541"),
      contact: topAdvert.set("contact", "526"),
      getContact: topAdvert.get("contact"),
      view: topAdvert.set("view", "430"),
      getView: topAdvert.get("view"),
      icontact: "far fa-address-card",
    },
    {
      iconeye: "far fa-eye",
      icon: "far fa-user",
      round: "2px solid #8F8F8F",
      pic: fam,
      ima: pic1,
      setName: topAdvert.set("userName", "Jack Thompson"),
      getName: topAdvert.get("userName"),
      location: topAdvert.set("locate", "Limbe"),
      getLocate: topAdvert.get("locate"),
      contact: topAdvert.set("contact", "336"),
      getContact: topAdvert.get("contact"),
      number: topAdvert.set("phone_number", "680497435"),
      view: topAdvert.set("view", "110"),
      getView: topAdvert.get("view"),
      iconlocate: "fas fa-map-marker-alt ",
      icontact: "far fa-address-card",
    },
    {
      icon: "far fa-user",
      iconeye: "far fa-eye",
      round: "2px solid #8F8F8F",
      location: topAdvert.set("locate", "Tiko"),
      getLocate: topAdvert.get("locate"),
      pic: king,
      ima: pic2,
      view: topAdvert.set("view", "693"),
      getView: topAdvert.get("view"),
      setName: topAdvert.set("userName", "Mark Steve"),
      number: topAdvert.set("phone_number", "675979541"),
      getName: topAdvert.get("userName"),
      contact: topAdvert.set("userName", "708"),
      getContact: topAdvert.get("contact"),
      iconlocate: "fas fa-map-marker-alt ",
      icontact: "far fa-address-card",
    },
  ];

  const cards = tops.map((item) => <CardRate item={item} />);
  return (
    <div id="top rated" className="thirdview pt-2">
      <div className="sell flex-column d-flex justify-content-center align-items-center pt-4 px-0 pb-2">
        <h4 className="sub1">Top Rated Advertisers</h4>
        <div className="mat"></div>
      </div>
      <div className="rate-content px-3 ">
        <div className=" rate-con row d-flex justify-content-around py-2">
          {cards}
        </div>
      </div>
    </div>
  );
}

export default Thirdview;
