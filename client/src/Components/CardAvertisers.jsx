import React, { useState, useEffect, useContext } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Parse from "parse";
const getProfiles = async () => {
  let results;
  const Profile = Parse.Object.extend("User_Profile");
  const query = new Parse.Query(Profile);
  await query.find().then((data) => (results = data));
  return results;
};

function CardAvertisers({ item, id }) {
  const [cadIn, setcadIn] = useState([]);

  useEffect(() => {
    getProfiles().then((data) => setcadIn(data));
  }, []);

  return (
    <div className="position-relative  col-12 col-sm-6 col-md-6 col-lg-3 p-3 p-sm-3 p-md-4 p-lg-3 p-xl-3">
      <style type="text/css">
        {`
        
         .btn-flat4 {
            background-color:#FFB800;
            // box-shadow: 10px 10px 20px rgba(147, 147, 147, 0.25);
            border-radius:5px;
            font-size:12px;
            color: white;
          }
     
          .btn-xsl {
            width:80%;
            height:35px;
            margin:1em;

           }
        
         `}
      </style>
      <div className="card-rate1 m-0 shadow">
        <div className="cardrate-header d-flex justify-content-center align-items-center py-3">
          <div
            className="rounded-rater d-flex justify-content-center align-items-center "
            style={{
              filter: "drop-shadow(10px 10px 30px rgba(0, 0, 0, 0.15))",
            }}
          >
            <img src={item.picture._url} alt="" width="90%" height="90%" />
          </div>
        </div>

        <div className="cardrate-body d-flex text-secondary ">
          <div className="detail d-flex  flex-column justify-content-center align-items-center px-3 pt-2">
            <div className="user d-flex  w-100 pt-2">
              <i class="far fa-user" style={{ fontSize: "15px" }}></i>
              <h6
                style={{
                  paddingLeft: "10px",
                  fontWeight: "400",
                  margin: "0",
                  overflow: "hidden",
                }}
              >
                {item.first_name}.
              </h6>
            </div>
            <div className="locate  d-flex w-100 pt-2">
              <i class="fas fa-map-marker-alt" style={{ fontSize: "15px" }}></i>
              <h6
                style={{
                  paddingLeft: "10px",
                  fontWeight: "400",
                  margin: "0",
                  overflow: "hidden",
                }}
              >
                {item.locality}.
              </h6>
            </div>
            <div className="Type  d-flex w-100 pt-2">
              <i class="fas fa-layer-group" style={{ fontSize: "15px" }}></i>
              <h6
                style={{
                  paddingLeft: "10px",
                  fontWeight: "400",
                  margin: "0",
                  overflow: "hidden",
                }}
              >
                {item.type}.
              </h6>
            </div>
            <div className="contact d-flex w-100 pt-2">
              <i class="far fa-address-card" style={{ fontSize: "15px" }}></i>
              <h6
                style={{
                  paddingLeft: "10px",
                  fontWeight: "400",
                  margin: "0",
                  overflow: "hidden",
                }}
              >
                {item.whatsapp_contact}.
              </h6>
            </div>
            <div className="views d-flex w-100  pt-2">
              <i class="far fa-eye" style={{ fontSize: "15px" }}></i>
              <h6
                style={{
                  paddingLeft: "10px",
                  fontWeight: "400",
                  overflow: "hidden",
                  margin: "0",
                }}
              >
                {item.whatsapp_view}.
              </h6>
              <h6
                className=""
                style={{ fontWeight: "400", overflow: "hidden", margin: "0" }}
              >
                Whatsapp Status Views
              </h6>
            </div>
          </div>
        </div>
        <div className="cardrate-footer  d-flex justify-content-center align-items-center">
          <Link
            to={{
              pathname: "/advertiser/" + id,
              state: { item },
            }}
          >
            <Button variant="flat4" size="xsl" type="submit">
              View Profile
            </Button>
          </Link>
        </div>
      </div>
    </div>
    //{" "}
    // </UserContext.Provider>
  );
}

export default CardAvertisers;
