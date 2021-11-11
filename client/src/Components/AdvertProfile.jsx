import React, { useEffect, useState, useContext } from "react";
import Navig1 from "./Navig1";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import Parse from "parse";

const AdvertProfile = (props) => {
  const [storeUsers, setstoreUsers] = useState([]);

  useEffect(async () => {
    setstoreUsers(JSON.parse(localStorage.getItem("USER")));
  }, []);

  console.log(storeUsers);
  // return <div>{storeUsers.email}</div>;
  return (
    <div className="profile ">
      {/* {storeUsers && ( */}
      <>
        {/* <Helmet>
          <title> {storeUsers.first_name}</title>
          <meta
            name="description"
            content="View and Contact advertiser to advertise your product"
          />
        </Helmet> */}
        <style type="text/css">
          {`

         .btn-flat2 {
            background-color:#FFB800;
            box-shadow: 10px 10px 20px rgba(147, 147, 147, 0.25);
            border-radius:5px;
            color: white;
          }

         .btn-xl {
          width:120px;
          height:50px;
          padding-bottom:10px;
          margin:1em;
         }
         `}
        </style>
        <div className="post row d-flex justify-content-center align-items-center">
          <div className="poster row ">
            <div className="poster-head col-12 d-flex flex-column justify-content-center align-items-center ">
              <div className="txt-title ">
                <h2 className="dima">My Profile</h2>
              </div>

              <div className="round-head d-flex justify-content-center align-items-center">
                <div className="img-head my-3">
                  <img
                    src={storeUsers.picture.url && storeUsers.picture.url}
                    alt=""
                    className="userpic"
                  />
                </div>
              </div>
              <div className="username flex-column d-flex justify-content-center align-items-center">
                <p className="name m-0">{storeUsers.first_name} </p>
                <p className="mail m-0">{storeUsers.email} </p>
                <p className="about"> {storeUsers.bio} </p>
              </div>
              <div className="offers  d-flex pt-4 justify-content-around">
                <div className="contact col-sm-6 col-xs-12 d-flex flex-column">
                  <p className="contact-txt">Whatsapp Contacts</p>
                  <i class="far fa-id-card seek"></i>
                  <p
                    className="contact-txt"
                    style={{
                      color: "#FFB800",
                      fontWeight: "800",
                      fontSize: "14px",
                    }}
                  >
                    {" "}
                    {storeUsers.whatsapp_contact}{" "}
                  </p>
                </div>
                <div className="views col-sm-6 col-xs-12 d-flex flex-column">
                  <p className="contact-txt">Whatsapp Views Per Day</p>
                  <i class="far fa-eye seek"></i>
                  <p
                    className="contact-txt"
                    style={{
                      color: "#28B9A7",
                      fontWeight: "800",
                      fontSize: "14px",
                    }}
                  >
                    {" "}
                    {storeUsers.whatsapp_view}{" "}
                  </p>
                </div>
                <div className="location col-sm-6 col-xs-12 d-flex flex-column">
                  <p className="contact-txt pt-3">Location</p>
                  <i class="fas fa-map-marker-alt seek"></i>
                  <p
                    className="contact-txt"
                    style={{
                      color: "#FFB800",
                      fontWeight: "800",
                      fontSize: "14px",
                    }}
                  >
                    {storeUsers.locality}
                  </p>
                </div>
                <div className="category col-sm-6 col-xs-12 d-flex flex-column">
                  <p className="contact-txt pt-3">Category</p>
                  <i class="fas fa-cubes seek"></i>
                  <p
                    className="contact-txt"
                    style={{
                      color: "#28B9A7",
                      fontWeight: "800",
                      fontSize: "14px",
                    }}
                  >
                    {" "}
                    {storeUsers.type}{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default AdvertProfile;
