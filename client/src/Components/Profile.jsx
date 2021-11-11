import React, { useEffect, useState, useContext } from "react";
import Navig1 from "./Navig1";
import ReactWhatsapp from "react-whatsapp";
import { Helmet } from "react-helmet";
import Parse from "parse";

const Profile = (props) => {
  const [keepUserData, setkeepUserData] = useState([]);

  const getProfiles = async () => {
    let results;
    const Profile = Parse.Object.extend("User_Profile");
    const query = new Parse.Query(Profile);
    await query.find().then((data) => (results = data));
    return results;
  };

  useEffect(() => {
    console.log("props" + props);
    let id = props.match.params.id;
    getProfiles().then((data) => {
      let userData = data.find((item) => item.id == id);
      setkeepUserData(userData);
    });
  }, []);

  return (
    <div className="profile ">
      {keepUserData.attributes && (
        <>
          <div className="row r1-navig m-0">
            <Navig1 />
          </div>
          <Helmet>
            <title> {keepUserData.attributes.first_name}</title>
            <meta
              name="description"
              content="View and Contact advertiser to advertise your product"
            />
          </Helmet>
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
                <div className="round-head d-flex justify-content-center align-items-center">
                  <div className="img-head my-3">
                    <img
                      src={keepUserData.attributes.picture._url}
                      alt=""
                      className="userpic"
                    />
                  </div>
                </div>
                <div className="username flex-column d-flex justify-content-center align-items-center">
                  <p className="name m-0">
                    {keepUserData.attributes.first_name}{" "}
                  </p>
                  <p className="mail m-0">{keepUserData.attributes.email} </p>
                  {/* <p className="loc m-0"> {keepUserData && keepUserData.locality} </p> */}
                  <p className="about"> {keepUserData.attributes.bio} </p>
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
                      {keepUserData.attributes.whatsapp_contact}{" "}
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
                      {keepUserData.attributes.whatsapp_view}{" "}
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
                      {keepUserData.attributes.locality}
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
                      {keepUserData.attributes.type}{" "}
                    </p>
                  </div>
                </div>
                <div className="foot-btn d-flex justify-content-end ">
                  {/* <Button variant="flat2" size="xl"> */}
                  <div
                    className="whatsapp-btn"
                    style={{
                      marginRight: "2em",
                      width: "30%",
                      height: "50px",
                      borderRadius: "5px",
                      boxShadow: "10px 10px 20px rgba(147, 147, 147, 0.25)",
                    }}
                  >
                    <ReactWhatsapp
                      className="clickBtn"
                      style={{
                        color: "white",
                        width: "100%",
                        height: "100%",
                        border: "none",
                      }}
                      message="Hello, hope you are good? I'm a seller and wish to get your service as an advertiser for my product "
                      number={`237 ${keepUserData.attributes.phone_number}`}
                    >
                      Contact <i class="fab fa-whatsapp"></i>
                    </ReactWhatsapp>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Profile;
