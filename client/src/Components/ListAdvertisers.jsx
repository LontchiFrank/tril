import React, { useState, useEffect, createContext } from "react";
import CardAvertisers from "./CardAvertisers";
import Parse from "parse";
import Navi from "./Navi";
import Spin from "../img/spin2.gif";
import { Helmet } from "react-helmet";
const getProfiles = async () => {
  let results;
  const Profile = Parse.Object.extend("User_Profile");
  const query = new Parse.Query(Profile);
  await query.find().then((data) => {
    results = data;
  });
  return results;
};
export const UserContext = createContext();
function ListAdvertisers() {
  const [searchTerm, setSearchTerm] = useState("");
  const [putIn, setputIn] = useState([]);
  useEffect(() => {
    getProfiles().then((data) => {
      setputIn(data);
    });
  }, []);
  const cardsAdvert = putIn
    .filter((val) => {
      if (searchTerm == "") {
        return val;
      } else if (
        val.attributes.first_name
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      ) {
        return val;
      } else if (
        val.attributes.locality.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        return val;
      } else if (
        val.attributes.type.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        return val;
      }
    })
    .map((item) => (
      <CardAvertisers key={item.id} item={item.attributes} id={item.id} />
    ));

  return (
    <div className="list conatainer-fluid m-0 p-0">
      <Helmet>
        <title>Explore Advertisers</title>
        <meta
          name="description"
          content="Explore Advertisers to advertise your product"
        />
      </Helmet>
      <div className="row r1 m-0">
        <Navi />
      </div>
      <div className="search-panel ">
        <form className="form-seach py-4 d-flex justify-content-center align-items-center">
          <div className="search-hold shadow">
            <input
              type="search"
              id="search"
              name="q"
              placeholder="Find Advertiser, Location, Type..."
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <input className="buton" type="submit" value="Search" />
          </div>
        </form>
      </div>
      <div className="rate-content container px-3 ">
        {putIn.length === 0 ? (
          <div
            className="d-flex justify-content-center align-items-center"
            style={{
              width: "100%",
              height: "50vh",
            }}
          >
            <img
              src={Spin}
              alt=""
              style={{
                width: "40%",
                height: "60%",
              }}
            />
          </div>
        ) : (
          <div className=" rate-con row d-flex justify-content-around py-2">
            {cardsAdvert}
          </div>
        )}
      </div>
    </div>
  );
}

export default ListAdvertisers;
